import { HtmlHTMLAttributes, useRef, useState } from "react"

export function Section3(){
    const[visible, setVisible] = useState("hidden");
    const[photoNum, setPhotoNum] = useState<any>(1);
    const firstRef = useRef<HTMLInputElement | null>(null);


    const handleMouseEnter = (num: number) => {
        setVisible("");
        setPhotoNum(num)
    }
    const handleMouseExit = () => {
        setVisible("hidden");
    }
    
   
    return(
        <div className="relative  max-w-screen font-serif">   
        <div  className="">
                    <img className={`absolute ml-230 mt-20 h-108 w-86 rounded-3xl ${visible}`}  src={`https://awwwards-sundown-studio.vercel.app/vdonimgs/photo0${photoNum}.avif`} alt="" />
                </div>

            <div id="1"  onMouseEnter={() => {handleMouseEnter(1)}}  onMouseOut={handleMouseExit} className="h-36 w-screen flex justify-between items-center border-b-1  hover:bg-amber-400">
                <div  className=" pl-4 text-4xl flex items-center"> 
                    Carmelo Anthony 7pm In Brooklyn Set 
                </div>
                <div className="pr-4">
                    <div className="uppercase font-sans ">
                        Wave sports entertainment
                    </div>
                    <div className="text-amber-900 flex justify-end">
                        Environments
                    </div>
                </div>
            </div>
            <div id="2" onMouseEnter={() => {handleMouseEnter(2)}}  onMouseOut={handleMouseExit} className="h-36 w-screen flex justify-between items-center border-b-1  hover:bg-amber-400">
                <div className=" pl-4 text-4xl flex items-center">
                    Maker Studio HIO
                </div>
                <div className="pr-4">
                    <div className="uppercase font-sans ">
                        Wave sports entertainment
                    </div>
                    <div className="text-amber-900 flex justify-end ">
                        Environments
                    </div>
                </div>
            </div>
            <div id="3" onMouseEnter={() => {handleMouseEnter(3)}}  onMouseOut={handleMouseExit} className="h-36 w-screen flex justify-between items-center border-b-1  hover:bg-amber-400">
                <div className=" pl-4 text-4xl flex items-center">
                    50th Aniversary
                </div>
                <div className="pr-4">
                    <div className="uppercase font-sans ">
                        Wave sports entertainment
                    </div>
                    <div className="text-amber-900 flex justify-end">
                        Environments
                    </div>
                </div>
            </div>
            <div id="4" onMouseEnter={() => {handleMouseEnter(4)}}  onMouseOut={handleMouseExit} className="h-36 w-screen flex justify-between items-center border-b-1  hover:bg-amber-400">
                <div className=" pl-4 text-4xl flex items-center">
                    Lorem ipsum dolor sit amet.
                </div>
                <div className="pr-4">
                    <div className="uppercase font-sans ">
                        Wave sports entertainment
                    </div>
                    <div className="text-amber-900 flex justify-end">
                        Environments
                    </div>
                </div>
            </div>
            <div id="5" onMouseEnter={() => {handleMouseEnter(5)}}  onMouseOut={handleMouseExit} className="h-36 w-screen flex justify-between items-center border-b-1  hover:bg-amber-400">
                <div className=" pl-4 text-4xl flex items-center">
                    Adipisicing elit. Fuga, cum.
                </div>
                <div className="pr-4">
                    <div className="uppercase font-sans ">
                        Wave sports entertainment
                    </div>
                    <div className="text-amber-900 flex justify-end">
                        Environments
                    </div>
                </div>
            </div>
            
        </div>
    )
}