"use client";

import React from "react";
import { ImageKitProvider, IKUpload } from "imagekitio-next";
import { Button } from "@/components/ui/button";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function UploadVideoContainer({ setImageKitFilePath }) {
  const authenticator = async () => {
    try {
      const response = await fetch("/api/auth");

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const { signature, expire, token } = await response.json();
      return { signature, expire, token };
    } catch (error) {
      console.error("Authentication request failed:", error);
      throw error;
    }
  };

  const onError = (err) => {
    console.error("Upload Error:", err);
  };

  const onSuccess = (res) => {
    console.log("Upload Success:", res);
    setImageKitFilePath(res.filePath);
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        onError={onError}
        onSuccess={onSuccess}
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload">
        <Button asChild>
          <span>Upload Video</span>
        </Button>
      </label>
    </ImageKitProvider>
  );
}
