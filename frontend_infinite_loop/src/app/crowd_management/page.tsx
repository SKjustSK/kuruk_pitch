"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import UploadVideoContainer from "./UploadVideoContainer";
import VideoContainer from "./VideoContainer";

const example_timelineData = [
  {
    second: 2,
    max_people_found: 4,
  },
  {
    second: 4,
    max_people_found: 10,
  },
  {
    second: 6,
    max_people_found: 7,
  },
  {
    second: 8,
    max_people_found: 6,
  },
  {
    second: 10,
    max_people_found: 9,
  },
];

const BACKEND_URL = process.env.NEXT_PUBLIC_COLLAB_PUBLIC_URL;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function CrowdManagementPage() {
  const [imageKitFilePath, setImageKitFilePath] = useState<string | null>(null);
  const videoURL = imageKitFilePath ? `${urlEndpoint}${imageKitFilePath}` : "";

  const [timelineData, setTimelineData] = useState<
    { second: number; max_people_found: number }[]
  >([]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, "0")} min`;
  };

  useEffect(() => {
    console.log("Request sent:", videoURL);
    if (!videoURL) return;

    const fetchTimelineData = async () => {
      const requestBody = {
        video_url: videoURL,
        metadata: {},
      };

      try {
        const response = await fetch(`${BACKEND_URL}/video-count-population`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch timeline data: ${errorText}`);
        }

        const data = await response.json();
        console.log(data);
        setTimelineData(data.timeline_data);
      } catch (error) {
        console.error("Error fetching timeline data:", error);
      }
    };

    fetchTimelineData();
  }, [videoURL]);

  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        Crowd Management & Detection
      </h1>

      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col gap-6 flex-1 min-w-[300px]">
          <Card className="shadow-lg rounded-xl">
            <CardContent className="px-6">
              <h2 className="text-xl font-semibold mb-4 border-b-2 pb-2">
                Live Video Feed
              </h2>
              <VideoContainer imageKitFilePath={imageKitFilePath} />
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-xl">
            <CardContent className="px-6">
              <h2 className="text-xl font-semibold mb-4 border-b-2 pb-2">
                Upload CCTV Footage
              </h2>
              <UploadVideoContainer setImageKitFilePath={setImageKitFilePath} />
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg rounded-xl w-full md:w-1/3 max-h-[80vh] overflow-hidden">
          <CardContent className="px-6 h-full flex flex-col">
            <h2 className="text-xl font-semibold mb-4 border-b-2 pb-2">
              Crowd Analysis Timeline
            </h2>
            <div className="space-y-3 overflow-y-auto pr-2 flex-1 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
              {timelineData.length > 0 ? (
                timelineData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 rounded-md bg-gray-100 dark:bg-gray-800"
                  >
                    <div className="w-24 font-medium text-gray-800 dark:text-gray-200">
                      {formatTime(item.second)}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {`Maximum ${item.max_people_found} people were found`}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  No data available
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
