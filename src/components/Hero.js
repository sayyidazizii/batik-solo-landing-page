// src/components/Hero.js

import React from "react";
import bgImage from "./assets/cloud.jpg"; // Update to SVG file
import ItemImage from "./assets/gunungan-wayang.png"; // Update to SVG file
import CloudImage from "./assets/mega_cloud.png"; // Awan image file
import Navbar from "./Navbar"; // Import the Navbar component

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar /> {/* Include Navbar here */}
      <div className="relative flex-1 flex items-center justify-center">
        <img
          src={ItemImage}
          alt="Gunungan Wayang Kiri"
          className="absolute right-10 bottom-20 transform -rotate-45 w-1/5 h-auto z-10"
        />
        <h1 className="text-5xl font-bold text-white z-20">
          Discover the Beauty of Batik Solo
        </h1>
        <img
          src={ItemImage}
          alt="Gunungan Wayang Kanan"
          className="absolute left-10 bottom-20 transform rotate-45 w-1/5 h-auto z-10"
        />

        <img
          src={CloudImage}
          alt="Awan Kiri Bawah"
          className="absolute left-48 bottom-72 transform w-1/5 h-auto z-0 animate-cloud-left"
        />

        <img
          src={CloudImage}
          alt="Awan Kanan Atas"
          className="absolute right-32 bottom-96 transform w-1/5 h-auto z-0 animate-cloud-right"
        />

        <style jsx>{`
          .animate-cloud-left {
            animation: moveCloudLeft 15s linear infinite;
          }

          .animate-cloud-right {
            animation: moveCloudRight 15s linear infinite;
          }

          @keyframes moveCloudLeft {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-100px);
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes moveCloudRight {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(100px);
            }
            100% {
              transform: translateX(0);
            }
          }

          @media (max-width: 768px) {
            .absolute {
              left: unset !important;
              right: unset !important;
              transform: unset !important;
            }
            .left-48 {
              left: 20% !important;
            }
            .right-32 {
              right: 20% !important;
            }
            .bottom-72 {
              bottom: 60% !important;
            }
            .bottom-96 {
              bottom: 70% !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Hero;
