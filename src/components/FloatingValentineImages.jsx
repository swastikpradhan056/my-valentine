import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const FloatingValentineImages = () => {
  const containerRef = useRef(null);

  // An array of random image URLs (local images in this example)
  const images = [
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
  ];

  useEffect(() => {
    // Create GSAP animations for each floating image and make them draggable
    const ctx = gsap.context(() => {
      const floatingImages = gsap.utils.toArray(".floating-image");

      floatingImages.forEach((img) => {
        // Generate random movement values within a smaller range
        const xMovement = Math.random() * 10 - 5 + "vw"; // Range: -5vw to +5vw
        const yMovement = Math.random() * 10 - 5 + "vh"; // Range: -5vh to +5vh

        // Create a tween for floating animation
        const tween = gsap.to(img, {
          x: xMovement,
          y: yMovement,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: Math.random() * 5 + 3, // Random duration between 3 and 8 seconds
          delay: Math.random() * 2,
        });

        // Make the image draggable within the container bounds
        Draggable.create(img, {
          type: "x,y",
          bounds: containerRef.current,
          onDragStart: () => tween.pause(),
          onDragEnd: () => tween.play(),
        });
      });
    }, containerRef);

    // Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute w-full h-screen overflow-hidden bg-transparent z-50"
    >
      {images.map((src, index) => {
        // Generate random initial positions and scale for a varied look
        const randomLeft = Math.random() * 100; // percentage value
        const randomTop = Math.random() * 100; // percentage value
        const randomScale = Math.random() * 0.5 + 0.8; // scale between 0.8 and 1.3

        return (
          <img
            key={index}
            src={src}
            alt="Valentine"
            className="floating-image absolute object-cover rounded-full shadow-lg"
            style={{
              width: "124px",
              height: "124px",
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
              transform: `scale(${randomScale})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingValentineImages;
