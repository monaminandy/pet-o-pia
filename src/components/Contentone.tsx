"use client";
import Image from "next/image";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Write",
      className: "text-primarythree dark:text-blue-500",
    },
    {
      text: "awesome",
      className: "text-primarythree dark:text-blue-500",
    },
    {
      text: "Blogs And Articles",
      className: "text-primarythree dark:text-blue-500",
    },
    {
      text: "in",
      className: "text-primarythree dark:text-blue-500",
    },
    {
      text: "Pet-O-Pia.",
      className: "text-primarythree font-bold dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mb-[5rem] mt-[5rem]  ">
        <TypewriterEffectSmooth words={words} />
        
      <p className="text-black font-medium text-xl ml-[50px] mr-[50px] mb-[40px] text-center  dark:text-neutral-200  ">
      Welcome to Pawsitive Pages, the online hub for pet lovers!  
      Here, you'll discover a wealth of information about all things 
      pets, from helpful care tips and training advice to heartwarming 
      stories and adorable photos. Whether you're a seasoned pet parent 
      or just starting your journey, Pawsitive Pages offers a welcoming 
      space to learn, share, and connect with fellow enthusiasts. <br /> <br />
      Explore our diverse collection of articles covering a wide range of animal 
      companions – dogs, cats, birds, reptiles, and small animals.  Delve into 
      expert insights on pet health, behavior, nutrition, and breed-specific 
      information. We're dedicated to providing reliable and up-to-date content 
      to help you give your furry, feathered, or scaled friends the best possible life.<br /> <br />
      Pawsitive Pages is more than just a resource; it's a thriving community! 
      We encourage you to join the conversation by sharing your experiences, 
      asking questions, and connecting with other pet owners. Have a story 
      to tell or advice to offer?  Contribute your own articles and blog 
      posts to become part of our growing network of pet enthusiasts.  
      Together, we can create a supportive and informative environment 
      celebrating the unconditional love and joy pets bring to our lives.  
      So, whether you're seeking answers, inspiration, or simply a place to connect with fellow 
      animal lovers, you've found the right place! Explore, contribute, and join the Pawsitive Pages family!
      </p>
      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-primarythree border dark:border-white border-transparent text-white text-sm">
          Create Article
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-primarythree border border-primarythree text-sm">
          Create Blog
        </button>
      </div>
    </div>
  );
}
