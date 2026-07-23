// import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Loader({ onComplete }) {
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((prev) => {
  //       if (prev >= 100) {
  //         clearInterval(interval);
  //         setTimeout(onComplete, 400);
  //         return 100;
  //       }
  //       return prev + 1;
  //     });
  //   }, 20);

  //   return () => clearInterval(interval);
  // }, [onComplete]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black relative overflow-hidden px-6">

      {/* Animated Background Glow */}
      <div className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-500 opacity-20 blur-[150px] animate-pulse"></div>

      {/* Container */}
      <div className="p-6 sm:p-10 md:p-12 rounded-2xl shadow-2xl flex flex-col items-center w-full max-w-xl">

        {/* Title */}
        <motion.img
          src="load2.png"
          alt="logo"
          className="w-64 md:w-80 lg:w-96 h-auto object-contain"
          style={{
            filter: "drop-shadow(0 0 20px rgba(239,68,68,0.5))",
          }}
          animate={{
            scale: [1, 1.05, 1],
            filter: [
              "drop-shadow(0 0 15px rgba(239,68,68,0.3))",
              "drop-shadow(0 0 35px rgba(239,68,68,0.8))",
              "drop-shadow(0 0 15px rgba(239,68,68,0.3))",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* {Spinner} */}
        {/* <motion.div
          className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-red-500 border-t-transparent rounded-full mt-8"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        /> */}

        {/* Progress Bar */}
        {/* <div className="w-full h-3 bg-gray-900 rounded-full mt-10 overflow-hidden relative shadow-inner"> */}

          {/* Glow */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-600/20 to-red-800/20 blur-sm"></div> */}

          {/* Progress */}
          {/* <motion.div
            className="h-full rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-800 relative"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          > */}

            {/* Shine */}
            {/* <motion.div
              className="absolute top-0 left-0 h-full w-16 sm:w-20 bg-white/30 blur-sm"
              animate={{ x: ["-100%", "400%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </motion.div>
        </div> */}

        {/* Percentage */}
        {/* <p className="mt-4 text-gray-400 text-xs sm:text-sm tracking-widest text-center">
          Initializing {progress}% ...
        </p> */}

      </div>
    </div>
  );
}

export default Loader;