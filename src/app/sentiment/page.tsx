import Navbar2 from "@/components/Navbar2"
import Sentihero from "@/components/Sentihero"
import Upload1 from "@/components/Upload1"
import Button from "@/components/Button"
import Link from "next/link"
import Footer2 from "@/components/Footer2"

const page = () => {
    return (
      <>
      <Navbar2 />
      <Sentihero />
      <Upload1 />
        <div className="ml-[44rem] mt-[-20px] cursor-pointer">
            <Link href="/sentiment1" >
            <Button 
                type="button"
                title='Submit'
                variant='btn_primary1' />
            </Link>    
        </div>
        <Footer2 />
      
      </>
    )
}

export default page