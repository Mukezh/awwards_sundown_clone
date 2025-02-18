import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MyComponent = () => {
  // Track scroll progress
  const { scrollYProgress } = useScroll();

  // Transform scroll progress into translateY values for section 1
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div className="h-[200vh] overflow-hidden relative">
      {/* Section 1 */}
      <motion.div
        style={{ y }}
        className="h-screen w-screen bg-blue-500 flex items-center justify-center absolute top-0 left-0"
      >
        <h1 className="text-white text-4xl">Section 1</h1>
      </motion.div>

      {/* Section 2 */}
      <div className="h-[200vh]  bg-green-500 flex items-center justify-center m-t-[100vh] top-[100vh] left-0 ">
        <h1 className="text-white text-4xl">Section 2</h1>
      </div>
    </div>
  );
};

export default MyComponent;