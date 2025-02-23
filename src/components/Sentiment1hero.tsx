import Button from "./Button"
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-dashboardone flex flex-row">
        <div className="max-w-4xl">
            <h1 className="text-7xl ml-[70px] font-bold mt-[180px] text-white ">
            Sentiment Analysis 
            </h1>
            <p className=" ml-[70px] mr-[50px] text-4xl md:text-left mt-8 text-white">Sentiment analysis is used to understand a dog's emotional state by analyzing its facial expressions, body language, and vocalizations.
            This technology can help owners better understand their dog's needs and improve their training methods.</p>
        </div>
        <div className="mt-[80px] ml-[0px] mr-[20px]">
            <Image src="/d1.png" alt="Pet Image" width={500} height={200}/>
        </div>
        
    </div>
  )
}

export default Hero;