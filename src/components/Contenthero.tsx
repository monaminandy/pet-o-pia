import Button from "../components/Button"
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-primarythree flex flex-row">
        <div className="max-w-4xl">
            <h1 className="text-7xl ml-[70px] font-bold mt-[180px] text-white ">
            Pawsitive Pet Tales
            </h1>
            <p className=" ml-[70px] mr-[50px] text-4xl md:text-left mt-8 text-white">A community for pet lovers to read and share articles.
Discover expert tips, heartwarming stories, and connect with fellow enthusiasts.
Contribute your own content and celebrate the joy of pet ownership!</p>
        </div>
        <div className="mt-[80px] ml-[0px] mr-[20px]">
            <Image src="/ban1.png" alt="Pet Image" width={900} height={500}/>
        </div>
        
    </div>
  )
}

export default Hero;