import { motion, useScroll, useTransform } from 'framer-motion';
import { Section3 } from './Section-three';

const MyComponent = () => {
  // Track scroll progress
  const { scrollYProgress } = useScroll();

  // Transform scroll progress into translateY values for section 1
  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-100%']);

  return (
    <>
      <Section3 />
      <div className="h-[100vh] overflow-x-hidden overflow-y-hidden relative w-full">
        {/* Section 1 */}
        <motion.div
          style={{ y }}
          className="h-auto left-0 right-0 bg-white flex items-center justify-center absolute top-0 w-full max-w-full"
        >
          {/* <h1 className="text-white text-4xl">Section 1</h1> */}
          {/* <Section4 /> */}
        </motion.div>

        {/* Section 2 */}
        <div className="h-[100vh] bg-black text-white flex items-center justify-center top-[100vh] left-0 w-full">
          <div className="mt-[40vh] h-screen w-full pt-24">
            <div className="px-8 flex justify-between">
              <div>
                <div>Work</div>
                <div>Studio</div>
                <div>Contact</div>
              </div>
              <div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <input type="text" placeholder="Enter Your mail " className="underline " />
              </div>
            </div>
            <div className="flex justify-center text-[20vw] md:text-[40vh] font-semibold pt-8">
              Sundown
            </div>
            <div className="border-2 mx-8"></div>
            <div className="flex flex-wrap justify-between px-8 gap-2 text-xs md:text-base">
              <div>Copyright Sundown-studio</div>
              <div>Brooklyn,NY</div>
              <div>Instagram</div>
              <div>LindkedIn</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
