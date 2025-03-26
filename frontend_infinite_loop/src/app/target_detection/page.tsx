"use client";

import React, { useState } from "react";
import { TargetLocation } from "@/types/interfaces";
import { Button } from "@/components/ui/button";
import UploadTargetImageContainer from "@/components/target-upload/UploadTargetImageContainer";
import TargetMapLocation from "@/components/map/TargetMapLocation";
import LocationList from "@/components/target-location/LocationList";

import {
  example_target_found_at_1,
  example_target_found_at_2,
} from "./example_target_found_at";

export default function App() {
  let [example_target_found_at, set_example_target_found_at] = useState<
    TargetLocation[]
  >([]);

  // Temporary function to change target locations to check animations
  const handleChangeTargetButton = () => {
    if (example_target_found_at.length === 0) {
      set_example_target_found_at(example_target_found_at_1);
    } else if (
      example_target_found_at[0].cctv_id ===
      example_target_found_at_1[0].cctv_id
    ) {
      set_example_target_found_at(example_target_found_at_2);
    } else {
      set_example_target_found_at(example_target_found_at_1);
    }
  };

  return (
    <main className="relative">
      <section className="absolute top-0 left-0 p-4 z-10 w-1/5 bg-tranparent flex flex-col gap-2">
        {/* Logo */}
        <div className="px-4 py-3 border-b bg-white rounded-lg flex items-center gap-2">
          <h1 className="text-3xl font-bold text-blue-600">TargetTrack</h1>
        </div>

        {/* Target Image Upload  */}
        <UploadTargetImageContainer
          setTargetFoundAt={set_example_target_found_at}
        />

        <div className="px-4 py-3 border-b bg-white rounded-lg flex items-center gap-2">
          <Button className="flex-1" onClick={handleChangeTargetButton}>
            Change target
          </Button>
        </div>
      </section>
      <TargetMapLocation target_found_at={example_target_found_at} />
      <LocationList target_found_at={example_target_found_at} />
    </main>
  );
}
