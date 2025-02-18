import { motion } from "framer-motion";

export function Section2() {
    return(
        <div className="w-screen">
        <div  className="h-screen w-screen overflow-hidden ">
           <motion.div
        className="flex items-center whitespace-nowrap scrollbar-hide"
        animate={{ x: ["0%", "-100%"] }} // Moves content left
        transition={{ ease: "linear", duration: 8, repeat: Infinity }} // Smooth infinite loop
      >
        
            {
                [...Array(2)].map((_,i) => (
                    <div key={i} className="flex items-center">
                <div className="text-9xl p-4 font-bold">
                EXPERIENCES 
                </div>
                <div>
                    <img className="h-18 min-w-18" src="https://awwwards-sundown-studio.vercel.app/vdonimgs/icon.png" alt="circle" />
                </div>
                <div className="text-9xl p-4 font-bold">
                    CONTENT 
                </div>
                <div>
                    <img className="h-18 min-w-18" src="https://awwwards-sundown-studio.vercel.app/vdonimgs/icon.png" alt="circle" />
                </div>
                <div className="text-9xl p-4 font-bold">
                    ENVIRONMENT
                </div>
                <div>
                    <img className="h-18 min-w-18" src="https://awwwards-sundown-studio.vercel.app/vdonimgs/icon.png" alt="circle" />
                </div>
            </div>
                ))
            }
        </motion.div>

        <div className="flex justify-between">
            <div className=" relative w-screen max-w-2/3 pl-4 pr-40">
            
            <div >
                <motion.div className="ml-128 mt-64 border-2 h-95 w-90 bg-[rgba(255,69,0)] border-[rgba(255,69,0)]   rounded-full blur-sm shadow-[0_0_40px_rgba(255,69,0)]"
                animate={{scale: [1,1.2,1]}}
                transition={{duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4}}
                >
                </motion.div> 
            </div>
            <div className="absolute -mt-164 text-6xl text-left pt-40 pr-36 font-bold">
            We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.
            </div>
            </div>
            <div className=" text-sm w-full max-w-1/3 pl-36 pt-12 ">
                <img className="rounded-2xl h-60 w-96" src="https://awwwards-sundown-studio.vercel.app/vdonimgs/img01.webp" alt="" />
                <div className="py-8 tracking-tight text-md w-96 px-8 font-semibold">
                We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. 
                We’re here to partner with you through every step of the process and know that relationships are the most important things we build.
                </div>
            </div>
             
        </div>
        <div className="border border-slate-200">
        </div>
        <br />
        <br />
        <br />
        </div>
        </div>
    )
}