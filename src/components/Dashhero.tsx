import Button from "../components/Button"
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-dashboardone flex flex-row">
        <div className="max-w-4xl">
            <h1 className="text-7xl ml-[70px] font-bold mt-[180px] text-white ">
            My Furry Friend's Hub
            </h1>
            <p className=" ml-[70px] mr-[50px] text-4xl md:text-left mt-8 text-white">From health records to playtime schedules, 
                "My Furry Friend's Hub" keeps everything you need for happy, healthy pets in one convenient place.Your pet's 
                well-being is our priority. Explore resources, schedule appointments, and discover new ways to nurture the bond you share with your 
                beloved companion.</p>
        </div>
        <div className="mt-[80px] ml-[0px] mr-[20px]">
            <Image src="/d1.png" alt="Pet Image" width={900} height={500}/>
        </div>
        
    </div>
  )
}

export default Hero;