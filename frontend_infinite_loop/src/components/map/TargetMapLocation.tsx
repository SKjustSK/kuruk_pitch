"use client";

import React, { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useMap,
} from "@vis.gl/react-google-maps";
import { TargetLocation } from "@/types/interfaces";

// <6 hrs
const MARKER_CHANGE_TIME_1 = 6 * 60 * 60 * 1000;
// <1 day
const MARKER_CHANGE_TIME_2 = 24 * 60 * 60 * 1000;
// <1 week
const MARKER_CHANGE_TIME_3 = 7 * 24 * 60 * 60 * 1000;

const getMarkerSize = (timestamp: Date) => {
  const now = Date.now();
  const diff = now - timestamp;

  if (diff <= MARKER_CHANGE_TIME_1) return 36;
  if (diff <= MARKER_CHANGE_TIME_2) return 30;
  if (diff <= MARKER_CHANGE_TIME_3) return 24;
  return 20;
};

const getMarkerColor = (timestamp: Date) => {
  const now = Date.now();
  const diff = now - timestamp;

  if (diff <= MARKER_CHANGE_TIME_1)
    return { background: "#FF3B30", border: "#B71C1C" }; // Bright Red
  if (diff <= MARKER_CHANGE_TIME_2)
    return { background: "#FF9800", border: "#E65100" }; // Orange
  if (diff <= MARKER_CHANGE_TIME_3)
    return { background: "#FFD600", border: "#FFAB00" }; // Yellow
  return { background: "#9E9E9E", border: "#616161" }; // Gray
};

const TargetMarkers = React.memo(
  ({ target_found_at }: { target_found_at: TargetLocation[] }) => {
    const [selectedMarker, setSelectedMarker] = useState<TargetLocation | null>(
      null
    );

    return (
      <>
        {target_found_at.map((geolocation) => {
          const { background, border } = getMarkerColor(geolocation.timestamp);
          const size = getMarkerSize(geolocation.timestamp);
          // Radius in meters
          const circleRadius = 500;

          return (
            <AdvancedMarker
              position={geolocation.coordinates}
              onClick={() => setSelectedMarker(geolocation)}
              key={geolocation.cctv_id}
            >
              <div className="relative flex items-center justify-center">
                {/* Pulsing Glow Effect */}
                <div
                  className="absolute w-full h-full rounded-full opacity-50 animate-ping"
                  style={{
                    width: `${size * 1.6}px`,
                    height: `${size * 1.6}px`,
                    backgroundColor: getMarkerColor(geolocation.timestamp)
                      .background,
                  }}
                />
                {/* Main Marker */}
                <div
                  className="relative flex items-center justify-center text-white font-bold border-2 rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: getMarkerColor(geolocation.timestamp)
                      .background,
                    borderColor: getMarkerColor(geolocation.timestamp).border,
                  }}
                ></div>
              </div>
            </AdvancedMarker>
          );
        })}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.coordinates}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="p-2 text-sm font-medium">
              <p className="font-bold">{selectedMarker.location_name}</p>
              <p className="text-gray-600">
                <strong>Time:</strong>{" "}
                {new Intl.DateTimeFormat("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }).format(new Date(selectedMarker.timestamp))}
              </p>
              <p className="text-gray-600">
                <strong>CCTV ID:</strong> {selectedMarker.cctv_id}
              </p>
            </div>
          </InfoWindow>
        )}
      </>
    );
  }
);

const FitMapToBounds = React.memo(
  ({ target_found_at }: { target_found_at: TargetLocation[] }) => {
    const map = useMap();

    useEffect(() => {
      if (!map || target_found_at.length === 0 || !window.google?.maps) return;

      const bounds = new window.google.maps.LatLngBounds();
      target_found_at.forEach(({ coordinates }) => bounds.extend(coordinates));

      map.fitBounds(bounds, 200); // Adjust padding
    }, [map, target_found_at]);

    return null;
  }
);

export default function TargetMapLocation({
  target_found_at,
}: {
  target_found_at: TargetLocation[];
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

  if (!apiKey) {
    console.error("Google Maps API key is missing");
    return <p>Google Maps API key is required</p>;
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ flex: 1, height: "100vh", zIndex: 1 }}
        defaultCenter={{ lat: 20.5937, lng: 78.9629 }}
        defaultZoom={5.5}
        gestureHandling="greedy"
        disableDefaultUI={true}
        mapId={mapId}
        reuseMaps={true}
      >
        <TargetMarkers target_found_at={target_found_at} />
        <FitMapToBounds target_found_at={target_found_at} />
      </Map>
    </APIProvider>
  );
}
