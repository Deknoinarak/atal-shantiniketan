import React from "react";
import { ImageDisplay } from "../assets/components/ImageDisplay";

const images = {
  primary: [
    { url: "https://via.placeholder.com/500" },
    { url: "https://via.placeholder.com/500" },
    { url: "https://via.placeholder.com/500" },
    { url: "https://via.placeholder.com/500" },
    { url: "https://via.placeholder.com/500" },
    { url: "https://via.placeholder.com/500" },
  ],
  secondary: [{ url: "https://via.placeholder.com/500" }],
  srsecondary: [],
};

export const Images = () => {
  return (
    <div className="container mx-auto p-5 my-5 grid grid-rows-3">
      <div className="flex flex-col mb-5">
        <h1 className="text-3xl font-bold mb-5">Primary</h1>
        <ImageDisplay images={images.primary} />
      </div>
      <div className="flex flex-col mb-5">
        <h1 className="text-3xl font-bold mb-5">Secondary</h1>
        <ImageDisplay images={images.secondary} />
      </div>
      <div className="flex flex-col mb-5">
        <h1 className="text-3xl font-bold mb-5">Sr.Secondary</h1>
        <ImageDisplay images={images.srsecondary} />
      </div>
    </div>
  );
};
