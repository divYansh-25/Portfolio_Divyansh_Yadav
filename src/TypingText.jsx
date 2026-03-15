import { useEffect, useState } from "react";

const texts = [
  "B.Tech in CSE (AI/ML)",
  "Java Programmer",
  "MERN Stack Developer"
];

function TypingText({ speed = 80, pause = 1500 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((textIndex + 1) % texts.length);
      }, pause);
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, textIndex, speed, pause]);

  return (
    <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
      {displayText}
      <span className="ml-1 text-red-500 animate-pulse">|</span>
    </h2>
  );
}

export default TypingText;