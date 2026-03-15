import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import TypingText from "./TypingText";
import { motion } from "framer-motion";
import { HiArrowDownTray } from "react-icons/hi2";
// import Splines from "./Splines";

function Home() {
  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      px-6 md:px-20
      text-center
      overflow-hidden
      "
    >
      {/* Full Background 3D */}
      {/* <Splines /> */}

      {/* HERO CONTENT */}
      <motion.div
        className="flex flex-col items-center gap-6 max-w-2xl relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-200">
          Hi, I am
          <span className="block mt-2 bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
            Divyansh Yadav
          </span>
        </h1>

        {/* Typing */}
        <TypingText />

        {/* Description */}
        <p className="text-gray-400 max-w-xl leading-relaxed text-[1.05rem]">
          Passionate about building scalable applications, writing clean code,
          and solving real-world problems using modern technologies.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
            px-6 py-3 rounded-full font-semibold
            bg-gradient-to-r from-red-600 to-red-900
            hover:scale-105
            transition
            shadow-lg shadow-red-900/40
            "
          >
            View Projects
          </button>

          <a
            href="/Resume1.pdf"
            download
            className="
            flex items-center gap-2
            px-6 py-3 rounded-full font-semibold
            bg-gradient-to-r from-red-600 to-red-900
            hover:scale-105
            transition
            shadow-lg shadow-red-900/40
            "
          >
            <HiArrowDownTray className="text-lg" />
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4 text-2xl text-gray-300">
          <FaGithub className="hover:text-red-500 transition" />
          <FaLinkedinIn className="hover:text-red-500 transition" />
          <RiInstagramLine className="hover:text-red-500 transition" />
          <FaXTwitter className="hover:text-red-500 transition" />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;