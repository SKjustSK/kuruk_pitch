"use client";

import React, { useState } from "react";
import { TargetLocation } from "@/types/interfaces";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { example_target_found_at_2 } from "@/app/target_detection/example_target_found_at";
interface UploadDescriptionContainerProps {
  setTargetFoundAt: (locations: TargetLocation[]) => void;
}

export default function UploadDescriptionContainer({
  setTargetFoundAt,
}: UploadDescriptionContainerProps) {
  const [targetDescription, setTargetDescription] = useState<string>("");

  const handleTargetDescriptionUpload = async () => {
    console.log("Sending description");

    setTargetFoundAt(example_target_found_at_2);
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-lg flex flex-col gap-3">
      <div className="pb-3 border-b rounded-t-lg">
        <h2 className="text-2xl font-semibold">Upload Target's Image</h2>
      </div>

      <Textarea
        id="targetDescription"
        placeholder="Describe the target's features (e.g., color, clothing, height, etc.)"
        value={targetDescription}
        onChange={(e) => setTargetDescription(e.target.value)}
        className="resize-none mt-2"
      />

      <Button
        onClick={handleTargetDescriptionUpload}
        disabled={!targetDescription}
      >
        Upload Description
      </Button>
    </div>
  );
}
