import { TargetLocation } from "@/types/interfaces";

const now = Date.now();

const example_target_found_at_ayush: TargetLocation[] = [
  {
    cctv_id: "CAM-002",
    location_name: "Kota Junction Railway Station",
    coordinates: { lat: 25.174, lng: 75.877 },
    timestamp: now - 5 * 60 * 60 * 1000, // ~5 hours ago
    confidence: 0.74,
  },
  {
    cctv_id: "CAM-003",
    location_name: "Nayapura Bus Stand",
    coordinates: { lat: 25.175, lng: 75.864 },
    timestamp: now - 4 * 60 * 60 * 1000, // ~4 hours ago (closer in time)
    confidence: 0.79,
  },
];

const example_target_found_at_gourang: TargetLocation[] = [
  {
    cctv_id: "CAM-003",
    location_name: "Aerodrome Circle",
    coordinates: { lat: 25.1642, lng: 75.8519 },
    timestamp: now - 12 * 60 * 60 * 1000, // ~12 hours ago
    confidence: 0.85,
  },
  {
    cctv_id: "CAM-004",
    location_name: "Chambal Garden",
    coordinates: { lat: 25.1558, lng: 75.8575 },
    timestamp: now - 3 * 24 * 60 * 60 * 1000, // ~3 days ago
    confidence: 0.88,
  },
];

const example_target_found_at_ashmit: TargetLocation[] = [
  {
    cctv_id: "CAM-005",
    location_name: "Vigyan Nagar",
    coordinates: { lat: 25.1465, lng: 75.8502 },
    timestamp: now - 6 * 24 * 60 * 60 * 1000, // ~6 days ago
    confidence: 0.92,
  },
  {
    cctv_id: "CAM-006",
    location_name: "Talwandi",
    coordinates: { lat: 25.138, lng: 75.8523 },
    timestamp: now - 10 * 24 * 60 * 60 * 1000, // ~10 days ago
    confidence: 0.83,
  },
];

export {
  example_target_found_at_ayush,
  example_target_found_at_gourang,
  example_target_found_at_ashmit,
};
