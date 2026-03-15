import { useEffect, useState } from "react";

function Loader({ onComplete }) {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {

      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300); // open portfolio
          return 100;
        }
        return prev + 1;
      });

    }, 20); // speed of loader

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
        Divyansh Yadav
      </h1>

      {/* Progress Bar */}
      <div className="w-72 h-2 bg-gray-800 rounded-full mt-10 overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-red-500 to-red-800 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />

      </div>

      {/* Percentage */}
      <p className="mt-4 text-gray-400 text-sm">
        Loading {progress}%
      </p>

    </div>
  );
}

export default Loader;