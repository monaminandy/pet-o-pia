import Image from "next/image"


const Getstart = () => {
  return (
    <div className="flex flexBetween p-10 mb-[120px] flex-row">
        <div>
            <Image className="cursor-pointer" src="/start1.png" alt="Pic One" width={350} height={350} />
            <p className="text-white text-center cursor-pointer font-semibold text-3xl">Login/SignIn</p>
        </div>
        <div>
            <Image className="cursor-pointer" src="/start2.png" alt="Pic One" width={350} height={350} />
            <p className="text-white text-center cursor-pointer font-semibold text-3xl">Create Pet Profile</p>
        </div>
        <div>
            <Image className="cursor-pointer" src="/start3.png" alt="Pic One" width={350} height={350} />
            <p className="text-white text-center cursor-pointer font-semibold text-3xl">Explore Dashboard</p>
        </div>
        <div>
            <Image className="cursor-pointer" src="/start4.png" alt="Pic One" width={390} height={390} />
            <p className="text-white text-center cursor-pointer font-semibold text-3xl">Daily Use</p>
        </div>
    </div>
  )
}

export default Getstart