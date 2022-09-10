import React from "react";
import { ImageDisplay } from "../assets/components/ImageDisplay";
import images from "../ImagesList.json";

export const Images = () => {
  return (
    <div className="container mx-auto p-5 my-5 flex flex-col">
      <div className="flex flex-col mb-5">
        <h1 className="text-3xl font-bold mb-5">Primary</h1>
        <ImageDisplay images={images.primary} />
      </div>
      <div className="flex flex-col mb-5">
        <h1 className="text-3xl font-bold mb-5">Secondary</h1>
        <ImageDisplay images={images.secondary} />
      </div>
      <div className="flex flex-col mb-5">
        <h1 className="text-3xl font-bold mb-5">Sr. Secondary</h1>
        <ImageDisplay images={images.srsecondary} />
      </div>
      <div className="flex flex-col mb-5">
        <h1 className="text-3xl font-bold mb-5">All images</h1>
        <ImageDisplay images={images.all} />
      </div>
    </div>
  );
};
