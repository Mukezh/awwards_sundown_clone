import { motion } from 'framer-motion';

function Section1() {
  return (
    <div className="w-full overflow-x-hidden bg-orange-50 pb-24">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header/Nav */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
          <div className="flex-shrink-0 flex items-center justify-center w-full sm:w-auto">
            <img
              src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
              alt="Sundown Studio Logo"
              className="h-10 w-auto sm:h-12"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center w-full sm:w-auto">
            {['Work', 'Studio', 'Contact'].map((item) => (
              <div
                key={item}
                className="relative px-6 h-10 sm:h-8 border-2 mb-2 sm:mb-0 mr-0 sm:mr-3 rounded-2xl border-slate-200 overflow-hidden group w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-black scale-y-0 origin-bottom duration-300 ease-in-out group-hover:scale-y-100"></span>
                <a
                  href="#"
                  className="relative text-black group-hover:text-white transition-colors duration-300 block text-center"
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row pb-8 gap-6 md:gap-0 w-full">
          <div
            id="left"
            className="w-full md:w-1/3 flex items-end justify-center md:justify-start mb-4 md:mb-0"
          >
            <div className="w-full text-lg md:text-3xl font-sans font-semibold text-center md:text-left">
              Sundown is a multi-disciplinary studio focused on creating unique, end-to-end
              experiences and environments.
            </div>
          </div>
          <div
            id="right"
            className="w-full md:w-2/3 flex items-center justify-center md:justify-end"
          >
            <div
              className="w-full break-words text-[10vw] md:text-[6vw] lg:text-[5vw] font-bold text-center md:text-right tracking-tight leading-tight max-w-full"
              style={{ wordBreak: 'break-word' }}
            >
              <span className="block">SPACES</span>
              <span className="block">THAT</span>
              <span className="block">INSPIRE</span>
            </div>
          </div>
        </div>

        <div className="border border-slate-200" />

        {/* Animated Shape & Video */}
        <div className="relative -mt-10 md:-mt-20">
          <div className="relative flex justify-center md:justify-end p-4 md:p-24">
            <motion.div
              className="absolute border-2 h-40 w-72 md:h-80 md:w-160 bg-[rgba(255,69,0)] border-[rgba(255,69,0)] rounded-tl-full rounded-bl-2xl rounded-tr-2xl blur-xs shadow-[0_0_60px_rgba(255,69,0)]"
              animate={{ scale: [1.2, 1.4, 1.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            ></motion.div>
          </div>

          <div className="relative mb-8 flex justify-center">
            <video
              className="rounded-xl w-full max-w-md md:max-w-2xl lg:max-w-full h-auto"
              autoPlay
              loop
              muted
              src="https://awwwards-sundown-studio.vercel.app/vdonimgs/bg-vdo.mp4"
            ></video>
          </div>
          <div className="border border-slate-200" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
