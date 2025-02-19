import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section2 } from "./Section-two";


const MyComponent = () => {
  // Track scroll progress
  const { scrollYProgress } = useScroll();

  // Transform scroll progress into translateY values for section 1
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div className="h-[140vh] overflow-hidden relative">
      {/* Section 1 */}
      <motion.div
        style={{ y }}
        className="h-screen w-screen bg-blue-500 flex items-center justify-center absolute top-0 left-0"
      >
        <h1 className="text-white text-4xl">Section 1</h1>
      </motion.div>

      {/* Section 2 */}
      <div className=" h-[140vh]  bg-green-500 flex items-center justify-center -m-t-[100vh] top-[100vh] left-0 ">
        <div className=" mt-[40vh] h-screen w-screen  pt-24 ">
          
          <div className="flex justify-between">
            <div>
              <div>
                Work
              </div>
              <div>
                Studio 
              </div>
              <div>
                Contact
              </div>
            </div>
            <div>
              <div>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
              <input type="text" placeholder="Enter Your mail " className="underline " />
            </div>
          </div>   
          <div className="flex justify-center text-[40vh] font-semibold pt-8">
            Sundown
          </div>
          <div className="border-2  mx-8">

          </div>
          <div className="flex justify-between px-8">
            <div>
              Copyright  Sundown-studio
            </div>
            <div>
              Brooklyn,NY
            </div>
            <div>
              Instagram
            </div>
            <div>
              LindkedIn
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default MyComponent;