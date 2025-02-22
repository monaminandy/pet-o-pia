import Button from "../components/Button"
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-primary flex flex-row">
        <div className="max-w-4xl">
            <h1 className="text-9xl ml-[70px] font-bold mt-[290px] text-white ">
            PET-O-PIA
            </h1>
            <p className=" ml-[70px] mr-[50px] text-6xl md:text-left mt-8 text-white">Your Pet our Responsibilty</p>
            

            <div className="ml-[70px] mt-[20px]">
            <Button
                type="button"
                title='Know More'
                variant='btn_primary' />
            </div>
        </div>
        <div className="mt-[110px] ml-[0px]">
            <Image src="/hero2.png" alt="Pet Image" width={600} height={900}/>
        </div>
        
    </div>
  )
}

export default Hero;