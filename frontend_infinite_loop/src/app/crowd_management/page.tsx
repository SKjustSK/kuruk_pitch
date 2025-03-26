"use client";

import { Button } from "@/components/ui/button";
import { CldUploadWidget } from "next-cloudinary";

export default function CrowdManagementPage() {
  return (
    <div>
      <CldUploadWidget uploadPreset="ml_default">
        {({ open }) => {
          return <Button onClick={() => open()}>Upload to Cloudinary</Button>;
        }}
      </CldUploadWidget>
    </div>
  );
}
