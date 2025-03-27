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
import { ImageKitProvider, IKImage, IKUpload } from "imagekitio-next";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function VideoUploadForm() {
  const [formData, setFormData] = useState<DemoCCTVFootage>({
    cctv_id: "",
    location_name: "",
    coordinates: { lat: 0, lng: 0 },
    time_uploaded_at: new Date(),
    video_url: "",
  });
  const [imageKitFilePath, setImageKitFilePath] = useState<string | null>(null);
  const videoURL = imageKitFilePath ? `${urlEndpoint}${imageKitFilePath}` : "";

  const authenticator = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth");
      if (!response.ok)
        throw new Error(`Request failed with status ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Authentication failed:", error);
      return {};
    }
  };

  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    setImageKitFilePath(res.filePath);
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoURL) return;

    const formDataToSend = new FormData();
    formDataToSend.append("cctv_id", formData.cctv_id);
    formDataToSend.append("location_name", formData.location_name);
    formDataToSend.append("coordinates", JSON.stringify(formData.coordinates));
    formDataToSend.append(
      "time_uploaded_at",
      formData.time_uploaded_at.toISOString()
    );
    formDataToSend.append("video_url", videoURL);

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
            <ImageKitProvider
              publicKey={publicKey}
              urlEndpoint={urlEndpoint}
              authenticator={authenticator}
            >
              <IKUpload
                className="bg-neutral-950 rounded-lg text-white px-4 py-2 text-sm"
                onError={onError}
                onSuccess={onSuccess}
              />
            </ImageKitProvider>
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
