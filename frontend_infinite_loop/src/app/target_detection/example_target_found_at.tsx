import { TargetLocation } from "@/types/interfaces";

const now = Date.now();

const example_target_found_at_1: TargetLocation[] = [
  {
    cctv_id: "CAM-003",
    location_name: "Kota Junction Railway Station",
    coordinates: { lat: 25.174, lng: 75.877 },
    timestamp: Date.now() - 2 * 60 * 1000 - 8 * 1000, // ~2 min 8 sec ago
    confidence: 0.85,
  },
  {
    cctv_id: "CAM-004",
    location_name: "Chambal Garden",
    coordinates: { lat: 25.1822, lng: 75.8374 },
    timestamp: Date.now() - 1 * 60 * 1000 + 7 * 1000, // ~1 min 53 sec ago
    confidence: 0.88,
  },
];

const example_target_found_at_2: TargetLocation[] = [
  {
    cctv_id: "CAM-005",
    location_name: "Academic Block",
    coordinates: { lat: 25.0504, lng: 75.8322 },
    timestamp: now - 5 * 60 * 60 * 1000,
    confidence: 0.6,
  },
  {
    cctv_id: "CAM-006",
    location_name: "Sports Complex",
    coordinates: { lat: 25.0507, lng: 75.8327 },
    timestamp: now - 18 * 60 * 60 * 1000,
    confidence: 0.92,
  },
  {
    cctv_id: "CAM-007",
    location_name: "Parking Area",
    coordinates: { lat: 25.051, lng: 75.8324 },
    timestamp: now - 5 * 24 * 60 * 60 * 1000,
    confidence: 0.95,
  },
  {
    cctv_id: "CAM-008",
    location_name: "Research Center",
    coordinates: { lat: 25.0509, lng: 75.8332 },
    timestamp: now - 15 * 24 * 60 * 60 * 1000,
    confidence: 0.8,
  },
];

const example_target_found_at_3: TargetLocation[] = [
  {
    cctv_id: "CAM-001",
    location_name: "IIIT Kota",
    coordinates: { lat: 25.05, lng: 75.8322 },
    timestamp: now - 3 * 60 * 60 * 1000,
    confidence: 0.93,
  },
  {
    cctv_id: "CAM-002",
    location_name: "Holiday Waterpark",
    coordinates: { lat: 25.0476, lng: 75.8298 },
    timestamp: now - 12 * 60 * 60 * 1000,
    confidence: 0.74,
  },
  {
    cctv_id: "CAM-003",
    location_name: "Kota Junction Railway Station",
    coordinates: { lat: 25.174, lng: 75.877 },
    timestamp: now - 3 * 24 * 60 * 60 * 1000,
    confidence: 0.85,
  },
  {
    cctv_id: "CAM-004",
    location_name: "Chambal Garden",
    coordinates: { lat: 25.1822, lng: 75.8374 },
    timestamp: now - 10 * 24 * 60 * 60 * 1000,
    confidence: 0.88,
  },
];

export { example_target_found_at_1, example_target_found_at_2 };
