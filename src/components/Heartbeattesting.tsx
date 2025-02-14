import { motion } from "framer-motion";

export default function HeartbeatEffect() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      {/* First Div */}
      <motion.div
        className="w-24 h-24 bg-red-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut",delay: 0.2 }}
      ></motion.div>

      {/* Second Div (Different Size) */}
      <motion.div
        className="w-32 h-32 bg-blue-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      ></motion.div>

      {/* Third Div (Different Size) */}
      <motion.div
        className="w-40 h-40 bg-green-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      ></motion.div>
    </div>
  );
}
