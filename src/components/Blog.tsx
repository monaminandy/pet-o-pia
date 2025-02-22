"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null!);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
    <h2 className="max-w-7xl mt-[100px] pl-4 mx-auto text-6xl text-left mb-[3rem] font-bold text-primarythree dark:text-neutral-200 font-sans">
    The Pet Hub: Embark on a journey through the finest pet blogs online!
    </h2>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "John Rey",
    title: "The Ultimate Guide to Pet Parenthood",
    src: "/cover1.jpg",
    ctaText: "Read",
    ctaLink: "https:/",
    content: () => {
      return (
        <p>
          Beyond addressing specific problems, building a strong bond with your pet is paramount. 
           Understanding their individual needs, preferences, and communication style is crucial. 
            Spending quality time with your pet, whether through play, walks, or simply cuddling, 
            strengthens your relationship and contributes to their emotional well-being. <br /><br /> Enrichment activities, 
            such as puzzle toys, training sessions, or exploring new environments, provide mental stimulation and prevent
             boredom, which can lead to behavioral issues.
        </p>
      );
    },
  },
  {
    description: "William Ken",
    title: "Happy Pets, Happy Homes",
    src: "/cover2.jpg",
    ctaText: "Read",
    ctaLink: "https:/",
    content: () => {
      return (
        <p>
          Pets enrich our lives immeasurably, but responsible pet ownership comes with its share of challenges. 
           Behavioral issues like excessive barking, scratching, or house soiling can be frustrating.  Often, these
            stem from boredom, anxiety, or unmet needs.  Positive reinforcement training, along with addressing the 
            underlying cause, such as providing more exercise or mental stimulation, is key.  Consulting a professional 
            trainer or behaviorist can be invaluable for persistent problems. <br /><br />  Health concerns, from fleas and ticks to 
            allergies and dental issues, are also common.  Regular veterinary checkups are crucial for preventative care, 
            and prompt attention to any changes in your pet's behavior or appearance is essential.  Following your vet's advice on 
            vaccinations, parasite control, and dental hygiene will contribute significantly to your pet's well-being.   

        </p>
      );
    },
  },

  {
    description: "Louisa Styles",
    title: "Pawsitive Living: Tips for a Thriving Pet",
    src: "/cover3.jpg",
    ctaText: "Read",
    ctaLink: "https:/",
    content: () => {
      return (
        <p>
          Travel can be stressful for some pets.  Motion sickness, anxiety, or difficulty adjusting to new places are common. 
           Consulting your vet about medication for motion sickness and making travel as comfortable as possible with secure 
           carriers and familiar toys can help.  Introducing new environments gradually is also important.  <br /><br />As pets age, 
           they may experience decreased mobility, cognitive decline, and age-related health issues. 
            Providing a comfortable environment, regular veterinary checkups, and considering dietary 
            changes or supplements as recommended by your vet can support their senior years.  Introducing new pets can 
            also be challenging, with potential jealousy or territorial behavior.  Gradual introductions, supervised interactions, 
            and providing separate resources can minimize conflict.  Positive reinforcement for positive interactions is essential.
        </p>
      );
    },
  },
  {
    description: "Henry Cat",
    title: "Beyond the Bowl: Holistic Pet Care",
    src: "/cover4.jpg",
    ctaText: "Read",
    ctaLink: "https:/",
    content: () => {
      return (
        <p>
          Nutritional challenges, like obesity or food allergies, can impact your pet's health.
Choosing a high-quality food appropriate for their age, breed, and activity level is important. 
 Careful portion control and avoiding overfeeding are essential for maintaining a healthy weight. 
  If you have any dietary concerns, consult your veterinarian.  Anxiety and stress can manifest in
   various ways, such as separation anxiety or fear of loud noises.  <br /><br />Creating a safe and comfortable environment,
    providing enrichment, and using desensitization techniques can help.  For severe anxiety, professional guidance from a 
    vet or behaviorist is recommended.  Grooming needs are often overlooked but are vital for your pet's health.  
    Regular brushing, nail trims, and ear cleaning prevent matting, infections, and discomfort.  Professional grooming
     might be necessary for certain breeds or if you're not comfortable handling it yourself.
        </p>
      );
    },
  },
  {
    description: "Patrick Holland",
    title: "Common Pet Problems and Solutions",
    src: "/cover5.jpg",
    ctaText: "Read",
    ctaLink: "https:/",
    content: () => {
      return (
        <p>
          Pets enrich our lives immeasurably, but responsible pet ownership comes with 
          its share of challenges.  Behavioral issues like excessive barking, scratching, 
          or house soiling can be frustrating.  Often, these stem from boredom, anxiety, or unmet needs.  
          Positive reinforcement training, along with addressing the underlying cause, such as providing 
          more exercise or mental stimulation, is key.<br /> <br />  Consulting a professional trainer or behaviorist 
          can be invaluable for persistent problems.  Health concerns, from fleas and ticks to allergies 
          and dental issues, are also common.  Regular veterinary checkups are crucial for preventative care, 
          and prompt attention to any changes in your pet's behavior or appearance is essential.  Following your 
          vet's advice on vaccinations, parasite control, and dental hygiene will contribute significantly to your 
          pet's well-being.  
        </p>
      );
    },
  },
  {
    description: "John Rey",
    title: "Hoppy Homes: Caring for Rabbits and Small Animals",
    src: "/cover1.jpg",
    ctaText: "Read",
    ctaLink: "https:/",
    content: () => {
      return (
        <p>
          Beyond addressing specific problems, building a strong bond with your pet is paramount. 
           Understanding their individual needs, preferences, and communication style is crucial. 
            Spending quality time with your pet, whether through play, walks, or simply cuddling, 
            strengthens your relationship and contributes to their emotional well-being. <br /><br /> Enrichment activities, 
            such as puzzle toys, training sessions, or exploring new environments, provide mental stimulation and prevent
             boredom, which can lead to behavioral issues.
        </p>
      );
    },
  },
  {
    description: "William Ken",
    title: "Reptile Rendezvous: Exploring the World of Reptiles",
    src: "/cover2.jpg",
    ctaText: "Read",
    ctaLink: "https:/",
    content: () => {
      return (
        <p>
          Pets enrich our lives immeasurably, but responsible pet ownership comes with its share of challenges. 
           Behavioral issues like excessive barking, scratching, or house soiling can be frustrating.  Often, these
            stem from boredom, anxiety, or unmet needs.  Positive reinforcement training, along with addressing the 
            underlying cause, such as providing more exercise or mental stimulation, is key.  Consulting a professional 
            trainer or behaviorist can be invaluable for persistent problems. <br /><br />  Health concerns, from fleas and ticks to 
            allergies and dental issues, are also common.  Regular veterinary checkups are crucial for preventative care, 
            and prompt attention to any changes in your pet's behavior or appearance is essential.  Following your vet's advice on 
            vaccinations, parasite control, and dental hygiene will contribute significantly to your pet's well-being.   

        </p>
      );
    },
  },

  {
    description: "Louisa Styles",
    title: "Purrfectly Content: The Cat Lover's Blog",
    src: "/cover3.jpg",
    ctaText: "Read",
    ctaLink: "https:/",
    content: () => {
      return (
        <p>
          Travel can be stressful for some pets.  Motion sickness, anxiety, or difficulty adjusting to new places are common. 
           Consulting your vet about medication for motion sickness and making travel as comfortable as possible with secure 
           carriers and familiar toys can help.  Introducing new environments gradually is also important.  <br /><br />As pets age, 
           they may experience decreased mobility, cognitive decline, and age-related health issues. 
            Providing a comfortable environment, regular veterinary checkups, and considering dietary 
            changes or supplements as recommended by your vet can support their senior years.  Introducing new pets can 
            also be challenging, with potential jealousy or territorial behavior.  Gradual introductions, supervised interactions, 
            and providing separate resources can minimize conflict.  Positive reinforcement for positive interactions is essential.
        </p>
      );
    },
  },
  {
    description: "Henry Cat",
    title: "Meow Mondays: Weekly Cat Content",
    src: "/cover4.jpg",
    ctaText: "Read",
    ctaLink: "https:/",
    content: () => {
      return (
        <p>
          Nutritional challenges, like obesity or food allergies, can impact your pet's health.
Choosing a high-quality food appropriate for their age, breed, and activity level is important. 
 Careful portion control and avoiding overfeeding are essential for maintaining a healthy weight. 
  If you have any dietary concerns, consult your veterinarian.  Anxiety and stress can manifest in
   various ways, such as separation anxiety or fear of loud noises.  <br /><br />Creating a safe and comfortable environment,
    providing enrichment, and using desensitization techniques can help.  For severe anxiety, professional guidance from a 
    vet or behaviorist is recommended.  Grooming needs are often overlooked but are vital for your pet's health.  
    Regular brushing, nail trims, and ear cleaning prevent matting, infections, and discomfort.  Professional grooming
     might be necessary for certain breeds or if you're not comfortable handling it yourself.
        </p>
      );
    },
  },
  {
    description: "Patrick Holland",
    title: "Pawsome Pups: Everything You Need to Know About Dogs",
    src: "/cover5.jpg",
    ctaText: "Read",
    ctaLink: "https:/",
    content: () => {
      return (
        <p>
          Pets enrich our lives immeasurably, but responsible pet ownership comes with 
          its share of challenges.  Behavioral issues like excessive barking, scratching, 
          or house soiling can be frustrating.  Often, these stem from boredom, anxiety, or unmet needs.  
          Positive reinforcement training, along with addressing the underlying cause, such as providing 
          more exercise or mental stimulation, is key.<br /> <br />  Consulting a professional trainer or behaviorist 
          can be invaluable for persistent problems.  Health concerns, from fleas and ticks to allergies 
          and dental issues, are also common.  Regular veterinary checkups are crucial for preventative care, 
          and prompt attention to any changes in your pet's behavior or appearance is essential.  Following your 
          vet's advice on vaccinations, parasite control, and dental hygiene will contribute significantly to your 
          pet's well-being.  
        </p>
      );
    },
  },
];
