import React from "react";
import { useInView } from "react-intersection-observer";

// Daftar URL gambar batik dari Picsum
const images = [
  {
    src: "https://picsum.photos/800/600?random=1",
    caption: "Batik 1",
  },
  {
    src: "https://picsum.photos/800/600?random=2",
    caption: "Batik 2",
  },
  {
    src: "https://picsum.photos/800/600?random=3",
    caption: "Batik 3",
  },
  {
    src: "https://picsum.photos/800/600?random=4",
    caption: "Batik 4",
  },
  {
    src: "https://picsum.photos/800/600?random=5",
    caption: "Batik 5",
  },
  {
    src: "https://picsum.photos/800/600?random=6",
    caption: "Batik 6",
  },
];

// Komponen untuk gambar dengan animasi
const ImageCard = ({ src, caption }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="relative flex justify-center items-center" ref={ref}>
      <img
        src={src}
        alt={caption}
        className={`w-full h-auto max-h-72 object-cover rounded-lg border-4 border-gray-800 transition-transform duration-500 ease-in-out ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } hover:scale-105 hover:shadow-lg`}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white text-center py-2 rounded-b-lg">
        {caption}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div
      className="p-8 bg-cover bg-center"
      style={{ backgroundImage: `url('/path/to/bg-mega-mendung-pattern.jpg')` }}
    >
      <h1 className="text-3xl font-bold mb-8 text-white">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <ImageCard key={index} src={image.src} caption={image.caption} />
        ))}
      </div>
    </div>
  );
};

export default About;
