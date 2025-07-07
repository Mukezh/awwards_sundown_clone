import { motion } from 'framer-motion';
export function Section2() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className=" w-full overflow-hidden">
        <motion.div
          className="flex items-center whitespace-nowrap scrollbar-hide w-full"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl p-2 sm:p-4 font-bold">
                EXPERIENCES
              </div>
              <div>
                <img
                  className="h-10 w-10 sm:h-14 sm:w-14 md:h-18 md:w-18 min-w-10 sm:min-w-14 md:min-w-18"
                  src="https://awwwards-sundown-studio.vercel.app/vdonimgs/icon.png"
                  alt="circle"
                />
              </div>
              <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl p-2 sm:p-4 font-bold">
                CONTENT
              </div>
              <div>
                <img
                  className="h-10 w-10 sm:h-14 sm:w-14 md:h-18 md:w-18 min-w-10 sm:min-w-14 md:min-w-18"
                  src="https://awwwards-sundown-studio.vercel.app/vdonimgs/icon.png"
                  alt="circle"
                />
              </div>
              <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl p-2 sm:p-4 font-bold">
                ENVIRONMENT
              </div>
              <div>
                <img
                  className="h-10 w-10 sm:h-14 sm:w-14 md:h-18 md:w-18 min-w-10 sm:min-w-14 md:min-w-18"
                  src="https://awwwards-sundown-studio.vercel.app/vdonimgs/icon.png"
                  alt="circle"
                />
              </div>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-col lg:flex-row mt-8 px-4 items-stretch">
          <div className="relative w-full lg:w-2/3">
            <div>
              <motion.div
                className="mx-auto md:ml-32 mt-16 md:mt-32 border-2 h-24 w-24 md:h-40 md:w-40 bg-[rgba(255,69,0)] border-[rgba(255,69,0)] rounded-full blur-sm shadow-[0_0_40px_rgba(255,69,0)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              ></motion.div>
            </div>
            <div className="relative mt-4 md:-mt-32 text-xl md:text-4xl text-left pt-10 md:pt-40 pr-0 md:pr-16 font-bold">
              We are a group of design-driven, goal-focused creators, producers, and designers who
              believe that the details make all the difference.
            </div>
          </div>
          <div className="text-sm w-full lg:w-1/3 pt-8 pr-2 lg:pt-12 flex flex-col items-end lg:items-end">
            <img
              className="rounded-2xl h-40 w-full max-w-xs md:h-60 md:w-96 object-cover"
              src="https://awwwards-sundown-studio.vercel.app/vdonimgs/img01.webp"
              alt="Studio work"
            />
            <div className="py-4 md:py-8 tracking-tight text-md w-full max-w-xs md:w-96 px-2 md:px-8 font-semibold">
              We love to create, we love to solve, we love to collaborate, and we love to turn
              amazing ideas into reality. We’re here to partner with you through every step of the
              process and know that relationships are the most important things we build.
            </div>
          </div>
        </div>
        <div className="border border-slate-200 mt-8" />
      </div>
    </div>
  );
}
