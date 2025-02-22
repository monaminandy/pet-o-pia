"use client";

import {Carousel} from "@/components/ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    {
      title: "What's Your Pet's Carving?",
      button: "Explore Pets",
      src: "/c1.jpg",
    },
    {
      title: "Get to know other Pet owners experience",
      button: "Explore Blog",
      src: "/c2.jpg",
    },
    {
      title: "Stop Searching around for best Pet care, Just drive into our site",
      button: "Explore Services",
      src: "/c3.jpg",
    },
    {
      title: "Know your pet's health better!",
      button: "Explore Dashboard",
      src: "/c4.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
