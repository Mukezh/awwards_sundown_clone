import { motion } from "framer-motion";
function Box() {

  return (
    <div className="mx-4 p-4">
    <div className="flex justify-between">
        <div >
        <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="sundownlogo" />
        </div>
        <div className="flex justify-between items-center">
            {/* <div className="transition-all origin-bottom delay-150 duration-700 px-6 h-8 border-2 mr-3  rounded-2xl border-slate-200 hover:scale-y-100 hover:bg-black hover:text-white">
                <a href="#">Work</a>
            </div>
            <div className="px-6 h-8 border-2 mr-3  rounded-2xl border-slate-200">
                <a href="#">Studio</a>
            </div>
            <div className="px-6 h-8 border-2 mr-3  rounded-2xl border-slate-200">
                <a href="#">Contact</a>
            </div> */}

            <div className="relative px-6 h-8 border-2 mr-3 rounded-2xl border-slate-200 overflow-hidden group">
                <span className="absolute inset-0 bg-black scale-y-0 origin-bottom  duration-300 ease-in-out group-hover:scale-y-100"></span>
                <a href="#" className="relative  text-black group-hover:text-white transition-colors duration-300">
                    Work
                </a>
            </div>
            <div className="relative px-6 h-8 border-2 mr-3 rounded-2xl border-slate-200 overflow-hidden group">
                <span className="absolute inset-0 bg-black scale-y-0 origin-bottom  duration-300 ease-in-out group-hover:scale-y-100"></span>
                <a href="#" className="relative  text-black group-hover:text-white transition-colors duration-300">
                    Studio
                </a>
            </div>
            <div className="relative px-6 h-8 border-2 mr-3 rounded-2xl border-slate-200 overflow-hidden group">
                <span className="absolute inset-0 bg-black scale-y-0 origin-bottom  duration-300 ease-in-out group-hover:scale-y-100"></span>
                <a href="#" className="relative  text-black group-hover:text-white transition-colors duration-300">
                    Contact
                </a>
            </div>
        </div>
    </div>
        <div className=" flex">
                <div id="left" className="h-144 w-full max-w-1/3  flex items-end">
                        <div className=" w-112 text-3xl font-sans decoration-4 font-semibold">
                        Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.
                        </div>
                </div>
                <div id="right" className=" h-144 w-full max-w-2/3 text-[8vw] font-bold flex justify-end gap-2 text-right">
                         <div className=" w-128 right-0 pr-2">
                            SPACES THAT INSPIRE
                         </div>
                </div>
        </div>
        <div className="relative flex justify-end p-12">
            <motion.div className=" absolute border-2 h-110 w-130 bg-[rgba(255,69,0)] border-[rgba(255,69,0)] rounded-l-full rounded-r-4xl blur-xs shadow-[0_0_60px_rgba(255,69,0)]"
            animate={{scale: [1.1,1.3,1.1]}}
            transition={{duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4}}
            >
                    
            </motion.div>
            <motion.div className=" absolute border-2 h-90 w-70 bg-[rgba(255,69,0)] border-[rgba(255,69,0)] rounded-full blur-xs shadow-[0_0_40px_rgba(255,69,0)]"
            animate={{scale: [1,1.2,1]}}
            transition={{duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4}}
            >
            </motion.div>
        </div>
        <br />
        <br />
        <br />
        <div className="relative">
        <video className="rounded-xl absolute "  autoPlay loop muted src="https://awwwards-sundown-studio.vercel.app/vdonimgs/bg-vdo.mp4"></video>
        </div>
    </div>
  );
}

export default Box;


