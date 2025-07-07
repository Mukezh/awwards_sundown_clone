import { motion } from 'framer-motion';

export function Section4() {
  const items = [
    {
      img: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus qui illo quaerat soluta libero.',
    },
    {
      img: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus qui illo quaerat soluta libero.',
    },
    {
      img: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fe_Hunter.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus qui illo quaerat soluta libero.',
    },
    {
      img: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus qui illo quaerat soluta libero.',
    },
    {
      img: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus qui illo quaerat soluta libero.',
    },
    {
      img: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1602_AfterPay.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus qui illo quaerat soluta libero.',
    },
  ];
  // Duplicate the items for seamless looping
  const marqueeItems = [...items, ...items];

  return (
    <div className="w-full overflow-x-hidden flex items-center py-32">
      <div className="w-full">
        <motion.div
          className="flex flex-nowrap gap-4 px-2 md:px-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 18, repeat: Infinity }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[220px] max-w-xs w-full px-2 border-dashed border-l-2 m-2 flex-shrink-0"
            >
              <div className="pt-4 pb-8 pl-2 flex justify-center">
                <img src={item.img} alt="Client logo" className="h-12 w-auto object-contain" />
              </div>
              <div className="h-24 md:h-32 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out text-xs md:text-base">
                {item.text}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
