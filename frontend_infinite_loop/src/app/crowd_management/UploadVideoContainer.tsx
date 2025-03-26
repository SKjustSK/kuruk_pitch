"use client";
import React from "react";
import { ImageKitProvider, IKImage, IKUpload } from "imagekitio-next";
import { Button } from "@/components/ui/button";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function UploadVideoContainer({ setImageKitFilePath }) {
  const authenticator = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth");

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      setImageKitFilePath(response.url);
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    console.log(res.url);
    console.log(res.filePath);
    setImageKitFilePath(res.filePath);
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <Button>
        <IKUpload onError={onError} onSuccess={onSuccess} />
      </Button>
    </ImageKitProvider>
  );
}
