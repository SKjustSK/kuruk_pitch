"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DemoCCTVFootage } from "@/types/interfaces";

export default function VideoUploadForm() {
  const [formData, setFormData] = useState<DemoCCTVFootage>({
    cctv_id: "",
    location_name: "",
    coordinates: { lat: 0, lng: 0 },
    time_uploaded_at: new Date(),
    video_url: "",
  });
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name === "lat" || name === "lng") {
        return {
          ...prev,
          coordinates: {
            ...prev.coordinates,
            [name]: value === "" ? "" : parseFloat(value),
          },
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile) return;

    const formDataToSend = new FormData();
    formDataToSend.append("cctv_id", formData.cctv_id);
    formDataToSend.append("location_name", formData.location_name);
    formDataToSend.append("lat", String(formData.coordinates.lat));
    formDataToSend.append("lng", String(formData.coordinates.lng));
    formDataToSend.append("video", videoFile);

    // try {
    //   const response = await fetch("YOUR_BACKEND_UPLOAD_URL", {
    //     method: "POST",
    //     body: formDataToSend,
    //   });
    //   const data = await response.json();
    //   console.log("Upload success:", data);
    // } catch (error) {
    //   console.error("Upload failed:", error);
    // }
    console.log(formDataToSend);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add New CCTV Video</CardTitle>
        <CardDescription>
          Enter the details for the new CCTV video footage
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cctv_id">CCTV ID</Label>
            <Input
              id="cctv_id"
              name="cctv_id"
              placeholder="Enter CCTV ID"
              value={formData.cctv_id}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location_name">Location Name</Label>
            <Input
              id="location_name"
              name="location_name"
              placeholder="Enter location name"
              value={formData.location_name}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lat">Latitude</Label>
              <Input
                id="lat"
                name="lat"
                type="number"
                step="any"
                placeholder="Enter latitude"
                value={formData.coordinates.lat || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lng">Longitude</Label>
              <Input
                id="lng"
                name="lng"
                type="number"
                step="any"
                placeholder="Enter longitude"
                value={formData.coordinates.lng || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="video">Upload Video</Label>
            <Input
              id="video"
              name="video"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
