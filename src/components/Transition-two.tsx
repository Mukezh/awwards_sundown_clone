import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export function TransitionLayout({ children }: { children: React.ReactNode }) {
  //declaring the component and getting children as props
  const controls = useAnimation(); //using useAnimation hook - takes manual controls on framer animations,
  const [showNextPage, setShowNextPage] = useState(false); //state variables
  const headings = ['Experiences', 'Content', 'Environment', '']; //array of data to display on front
  const [next, setNext] = useState(0); //state variables
  useEffect(() => {
    const animateSequence = async () => {
      // Start with the transition overlay visible
      await controls.start({ y: 0 });

      // Set the next page to be visible
      setShowNextPage(true);

      // Animate the overlay away
      await controls.start({ y: '-100vh' });
    };

    animateSequence();
  }, [controls]);

  useEffect(() => {
    let timer: any;

    if (next < headings.length) {
      timer = setTimeout(() => {
        setNext((c) => c + 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [next]);

  return (
    <div className="relative">
      {/* The main content */}
      <div className={showNextPage ? 'block' : 'hidden'}>{children}</div>

      {/* The transition overlay */}
      <motion.div
        animate={controls}
        transition={{ duration: 1, delay: 2, ease: 'easeInOut' }}
        className="h-screen bg-black fixed top-0 left-0 w-full z-50 flex justify-center items-center"
      >
        <div>
          {headings.slice(next - 1, next).map((text, index) => (
            <h1
              key={index}
              className="text-5xl sm:text-7xl md:text-9xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent max-w-full truncate break-words text-center px-2"
              style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
            >
              {text}
            </h1>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
