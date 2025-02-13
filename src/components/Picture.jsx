import React from "react";
import Carousel from "./Carousel";
import { ImageCard } from "./ImageCard";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
  ];

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          Our Pictures
        </h1>
        <Carousel>
          {pictures.map((imageUrl, index) => (
            <ImageCard
              key={index}
              imageUrl={imageUrl}
              altText="Placeholder image"
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate("/recap")}
          >
            <ArrowLeft /> Previous page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Picture;
