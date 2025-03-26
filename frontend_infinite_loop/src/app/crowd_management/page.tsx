"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import UploadVideoContainer from "./UploadVideoContainer";
import VideoContainer from "./VideoContainer";

const example_timelineData = [
  { second: 10, description: "Maximum 10 people found" },
  { second: 20, description: "Maximum 5 people found" },
  { second: 30, description: "Maximum 8 people found" },
  { second: 40, description: "Maximum 12 people found" },
  { second: 50, description: "Maximum 3 people found" },
];

export default function CrowdManagementPage() {
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [imageKitFilePath, setImageKitFilePath] = useState<string | null>(null);
  const [timelineData, setTimelineData] = useState([]);

  // once you get the videoURL, do a fetch request to backend, useEfffect? idk

  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        Crowd Management & Detection
      </h1>

      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col gap-6 flex-1 min-w-[300px]">
          <Card className="shadow-lg rounded-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Live Video Feed</h2>
              <VideoContainer imageKitFilePath={imageKitFilePath} />
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Upload CCTV Footage
              </h2>
              <UploadVideoContainer setImageKitFilePath={setImageKitFilePath} />
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg rounded-xl w-full md:w-1/3 max-h-[80vh] overflow-hidden">
          <CardContent className="p-6 h-full flex flex-col">
            <h2 className="text-xl font-semibold mb-4">
              Crowd Analysis Timeline
            </h2>
            <div className="space-y-3 overflow-y-auto pr-2 flex-1 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 rounded-md bg-gray-100 dark:bg-gray-800"
                >
                  <div className="w-24 font-medium text-gray-800 dark:text-gray-200">
                    {item.second} min
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
