"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full bg-primarythree h-full py-20">
      <h2 className="max-w-7xl mt-[70px] pl-4 mx-auto text-6xl text-left  font-bold text-white dark:text-neutral-200 font-sans">
      Paws & Read: Explore the Best Pet Care Articles!
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Shelters have all kinds of pets—dogs, cats, rabbits, birds, and even exotic animals. 
              </span>{" "}
              Bringing a puppy home is an exciting experience, but proper training is 
              crucial for a well-behaved and happy dog. Teaching basic commands early 
              helps build good habits, improves communication, and strengthens the bond 
              between you and your pet. Here are five essential commands every dog should learn.
              Getting a pet is a big decision that requires careful consideration. Different 
              pets have different needs, and choosing the right one depends on your lifestyle, 
              living space, and time commitment. Here’s a guide to help you select the perfect pet for you.
              Keeping your pet healthy is a top priority for any pet owner. Just like humans, pets can 
              develop health problems that require attention and care. Knowing the most common issues and 
              how to prevent them can help your furry friend live a long, happy life.

            </p>
            <Image
              src="/con2.jpeg"
              alt="Pet Guide"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Pet Articles",
    title: "DOG CARE",
    src: "/cov11.jpg",
    content: <DummyContent />,
  },
  {
    category: "Grooming",
    title: "Enhance your Pet's Grooming",
    src: "/cov12.jpg",
    content: <DummyContent />,
  },
  {
    category: "Pet depression",
    title: "Does pet also suffer from depression?",
    src: "/cov13.jpg",
    content: <DummyContent />,
  },

  {
    category: "Best Guide",
    title: "Maps best pet guide for beginners",
    src: "/cov14.jpg",
    content: <DummyContent />,
  },
  {
    category: "Model Doggo",
    title: "Does pet can be better model than humans?",
    src: "/cov15.jpg",
    content: <DummyContent />,
  },
  {
    category: "Sleeping Puppies",
    title: "Dreams of Dogs",
    src: "/cov16.jpg",
    content: <DummyContent />,
  },
];
