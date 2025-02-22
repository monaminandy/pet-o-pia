import Navbar2 from "@/components/Navbar2"
import Sentiment1hero from "@/components/Sentiment1hero"
import Upload1 from "@/components/Upload1"
import Button from "@/components/Button"
import Link from "next/link"
import Output from "@/components/Output"
import Footer2 from "@/components/Footer2"

const page = () => {
    return (
      <>
      <Navbar2 />
      <Sentiment1hero />
      <div className="bg-white mt-[2rem]"> 
      <iframe src="/Dog.mp4" allowFullScreen className="w-[97rem] h-[20rem] bg-white" />
      </div>
      <div className="ml-[20rem] mt-[-20px] cursor-pointer">
        <Output />
      </div>
      
      <Footer2 />
      </>
    )
}

export default page