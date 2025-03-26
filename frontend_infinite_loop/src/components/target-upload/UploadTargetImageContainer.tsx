"use client";

import React, { useState } from "react";
import { TargetLocation } from "@/types/interfaces";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus } from "lucide-react";
import { example_target_found_at_1 } from "@/app/target_detection/example_target_found_at";
interface UploadTargetImageContainerProps {
  setTargetFoundAt: (locations: TargetLocation[]) => void;
}

export default function UploadTargetImageContainer({
  setTargetFoundAt,
}: UploadTargetImageContainerProps) {
  const [targetImage, setTargetImage] = useState<string | null>(null);
  const [targetDescription, setTargetDescription] = useState<string>("");

  const handleTargetImageDisplayContainer = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setTargetImage(imageUrl);
  };

  const handleTargetImageUpload = () => {
    // TODO: Fetch requests for backend image processing (targetImage, targetDescription)
    setTargetFoundAt(example_target_found_at_1);
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-lg flex flex-col gap-3">
      <div className="pb-3 border-b rounded-t-lg">
        <h2 className="text-2xl font-semibold">Upload Target's Image</h2>
      </div>

      <div className="w-full aspect-video border-2 border-dashed border-gray-300 flex items-center justify-center rounded-lg p-3 bg-gray-50">
        {targetImage ? (
          <img
            src={targetImage}
            className="max-h-full max-w-full object-contain rounded-lg"
            alt="Target Preview"
          />
        ) : (
          <ImagePlus className="w-12 h-12 text-gray-400" />
        )}
      </div>

      <Input
        id="targetImage"
        type="file"
        accept="image/*"
        onChange={handleTargetImageDisplayContainer}
        className="pt-2"
      />

      {/* Target Description Input */}
      <Textarea
        id="targetDescription"
        placeholder="Describe the target's features (e.g., color, clothing, height, etc.)"
        value={targetDescription}
        onChange={(e) => setTargetDescription(e.target.value)}
        className="resize-none mt-2"
      />

      <Button onClick={handleTargetImageUpload} disabled={!targetImage}>
        Upload Target
      </Button>
    </div>
  );
}
