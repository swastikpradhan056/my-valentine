import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { fireworks } from "../assets";
import confetti from "canvas-confetti";
import FloatingValentineImages from "./FloatingValentineImages";

function Closing() {
  const navigate = useNavigate();
  const audioElementRef = useRef(null);
  const [yes, setYes] = useState(false);
  const [floatImage, setFloatImage] = useState(false);
  const [audio, setAudio] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleYes = () => {
    setYes(true);
    setAudio(true);
    setFloatImage(true);
  };
  const handleNoClick = () => {
    // When Maya hovers over the NO button, move it to a random position
    const randomX = Math.floor(Math.random() * 300 - 150);
    const randomY = Math.floor(Math.random() * 300 - 150);
    setNoButtonStyle({ transform: `translate(${randomX}px, ${randomY}px)` });
  };

  useEffect(() => {
    if (yes) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          y: 0.6,
        },
      });
    }
  }, [yes]);

  useEffect(() => {
    if (audio) {
      audioElementRef.current.play();
    }
  }, [audio]);

  return (
    <div className="min-h-screen w-full bg-black/20 flex flex-col items-center justify-center relative z-20">
      <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Fireworks background */}
        <div
          className="absolute inset-0 z-100 opacity-50"
          style={{
            backgroundImage: `url(${fireworks})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Christmas tree */}
        <div className="z-10 mb-8">
          <img
            src={`/images/${yes ? "love" : "please"}.gif`}
            alt="Animated Christmas Tree"
            className="w-64 h-full object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Greeting text */}
        <div className="w-[90%] max-w-[400px]">
          <p className="z-10 text-white text-center text-2xl font-semibold px-4 drop-shadow-lg">
            WILL YOU BE MY VALENTINE?
          </p>
          <div className="flex flex-row gap-4 justify-center items-center w-full mt-4">
            <button
              className="relative inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 sm:px-8 sm:py-3 font-semibold text-sm sm:text-base text-white group"
              onClick={handleYes}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-green-500 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"></span>
              <span className="relative flex items-center gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span>Be My Valentine</span>
              </span>
            </button>
            <button
              className="relative inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 sm:px-8 sm:py-3 font-semibold text-sm sm:text-base text-white group"
              style={noButtonStyle}
              onClick={handleNoClick}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90"></span>
              <span className="relative flex items-center gap-2">
                <span>NO 😢</span>
              </span>
            </button>
          </div>

          {/* Button */}
          <div className="flex justify-center w-full mt-12 z-10">
            <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
              onClick={() => navigate("/letter")}
            >
              <ArrowLeft /> Previous page
            </button>
          </div>
          <audio src="/music/bhawana.mp3" ref={audioElementRef} loop />
        </div>
      </div>
      {floatImage ? <FloatingValentineImages /> : ""}
    </div>
  );
}

export default Closing;
