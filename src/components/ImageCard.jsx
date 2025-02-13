import React from "react";

export const ImageCard = ({ imageUrl, altText = "image", key }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden shadow-lg bg-white rounded-lg h-[36rem]">
      <div className="relative w-full h-full">
        <img
          key={key}
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
