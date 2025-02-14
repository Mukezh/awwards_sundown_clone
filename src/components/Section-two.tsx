import { motion } from "framer-motion";

export function Section2() {
    return(
        <div>
        <div  className="h-screen overflow-x-scroll ">
           {/* <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }} // Moves content left
        transition={{ ease: "linear", duration: 8, repeat: Infinity }} // Smooth infinite loop
      >
        
            {
                [...Array(2)].map((_,i) => (
                    <div key={i} className="flex items-center bg-emerald-400">
                <div className="text-9xl p-4">
                EXPERIENCES 
                </div>
                <div>
                    <img className="h-18 min-w-18" src="https://awwwards-sundown-studio.vercel.app/vdonimgs/icon.png" alt="circle" />
                </div>
                <div className="text-9xl p-4">
                    CONTENT 
                </div>
                <div>
                    <img className="h-18 min-w-18" src="https://awwwards-sundown-studio.vercel.app/vdonimgs/icon.png" alt="circle" />
                </div>
                <div className="text-9xl">
                    ENVIRONMENT
                </div>
                <div>
                    <img className="h-18 min-w-18" src="https://awwwards-sundown-studio.vercel.app/vdonimgs/icon.png" alt="circle" />
                </div>
            </div>
                ))
            }
        </motion.div> */}

        <div className="flex justify-between">
            <div className="text-6xl w-full max-w-2/3 pl-12 pr-48 text-left pt-48 font-bold">
            We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.
            </div>
            <div className="text-sm w-full max-w-1/3 pl-24 pt-12">
                <img className="rounded-2xl h-60 w-96" src="https://awwwards-sundown-studio.vercel.app/vdonimgs/img01.webp" alt="" />
                <div className="py-8 tracking-tight text-lg w-96 px-4 font-semibold">
                We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. 
                We’re here to partner with you through every step of the process and know that relationships are the most important things we build.
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}