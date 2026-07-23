import AnimatedSection from "./AnimatedSection";
import ddivyansh from "./assets/ddivyansh.png";
import {
  FaCode,
  FaReact,
  FaJava,
  FaNodeJs,
  FaArrowRight,
  FaUser,
  FaBullseye,
  FaLayerGroup,
  FaHtml5,
  FaGit,
  FaGithub,
} from "react-icons/fa";

import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";

import {
  MdOutlinePsychology,
  MdAutoAwesome,
} from "react-icons/md";
import { FaCss, FaHandshake } from "react-icons/fa6";

function About() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AnimatedSection>
      <section
        id="about"
        className="
          relative
          scroll-mt-20
          px-[6%]
          md:px-[7%]
          py-12
          lg:py-6
          lg:min-h-[calc(100vh-80px)]
          lg:flex
          lg:items-center
          text-gray-200
          overflow-hidden
        "
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute top-[25%] left-[18%] w-[320px] h-[320px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

        {/* MAIN CONTAINER */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-[1350px]
            mx-auto
            grid
            lg:grid-cols-[0.88fr_1.12fr]
            gap-12
            lg:gap-14
            items-center
          "
        >
          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[430px] xl:max-w-[460px]">

              {/* IMAGE FRAME */}
              <div
                className="
                  relative
                  h-[460px]
                  sm:h-[520px]
                  lg:h-[540px]
                  xl:h-[570px]
                  rounded-[28px]
                  border
                  border-red-500
                  bg-gradient-to-b
                  from-red-950/30
                  via-black/30
                  to-black/70
                  overflow-hidden
                  shadow-[0_0_50px_rgba(239,68,68,0.12)]
                "
              >
                {/* CIRCULAR BACKGROUND DESIGN */}
                <div
                  className="
                    absolute
                    w-[300px]
                    h-[300px]
                    sm:w-[340px]
                    sm:h-[340px]
                    rounded-full
                    border
                    border-red-500/20
                    top-[80px]
                    left-1/2
                    -translate-x-1/2
                  "
                />

                <div
                  className="
                    absolute
                    w-[230px]
                    h-[230px]
                    sm:w-[270px]
                    sm:h-[270px]
                    rounded-full
                    border
                    border-red-500/20
                    top-[115px]
                    left-1/2
                    -translate-x-1/2
                  "
                />

                {/* PROFILE IMAGE */}
                <img
                  src={ddivyansh}
                  alt="Divyansh Yadav"
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    -translate-x-1/2
                    w-full
                    h-[100%]
                    object-contain
                    object-bottom
                    z-10
                  "
                />

                {/* BOTTOM GRADIENT */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-[150px]
                    bg-gradient-to-t
                    from-black/80
                    to-transparent
                    z-10
                    pointer-events-none
                  "
                />
              </div>

              {/* CODE ICON */}
              <div
                className="
                  absolute
                  top-[27%]
                  left-1
                  sm:-left-7
                  z-20
                  w-[54px]
                  h-[54px]
                  sm:w-[60px]
                  sm:h-[60px]
                  hidden sm:flex
                  rounded-xl
                  border
                  border-red-500/30
                  bg-[#151010]/90
                  backdrop-blur-xl
                  items-center
                  justify-center
                  text-red-500
                  text-2xl
                  shadow-xl
                  hover:-translate-y-2
                  hover:shadow-red-500/20
                  transition-all
                  duration-300
                "
              >
                <FaCode />
              </div>

              {/* REACT ICON */}
              <div
                className="
                  absolute
                  top-[41%]
                  left-1
                  sm:-left-7
                  hidden sm:flex
                  z-20
                  w-[54px]
                  h-[54px]
                  sm:w-[60px]
                  sm:h-[60px]
                  rounded-xl
                  border
                  border-white/10
                  bg-[#111]/90
                  backdrop-blur-xl
                  items-center
                  justify-center
                  text-cyan-400
                  text-2xl
                  shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <FaReact />
              </div>

              {/* MONGODB ICON */}
              <div
                className="
                  absolute
                  top-[55%]
                  left-1
                  sm:-left-7
                  hidden sm:flex
                  z-20
                  w-[54px]
                  h-[54px]
                  sm:w-[60px]
                  sm:h-[60px]
                  rounded-xl
                  border
                  border-white/10
                  bg-[#111]/90
                  backdrop-blur-xl
                  items-center
                  justify-center
                  text-green-500
                  text-2xl
                  shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <SiMongodb />
              </div>

              {/* AI ICON */}
              <div
                className="
                  absolute
                  top-[57%]
                  right-0
                  sm:-right-7
                  hidden sm:flex
                  z-20
                  w-[58px]
                  h-[58px]
                  sm:w-[65px]
                  sm:h-[65px]
                  rounded-xl
                  border
                  border-red-500/30
                  bg-[#181010]/90
                  backdrop-blur-xl
                  items-center
                  justify-center
                  shadow-xl
                  hover:-translate-y-2
                  hover:shadow-red-500/20
                  transition-all
                  duration-300
                "
              >
                <div className="relative text-red-400 font-bold text-2xl">
                  AI
                  <MdAutoAwesome className="absolute -top-3 -right-4 text-base" />
                </div>
              </div>

              {/* PROFILE INFO CARD */}
              <div
                className="
                  absolute
                  z-30
                  left-1/2
                  -translate-x-1/2
                  bottom-6
                  w-[78%]
                  sm:w-[68%]
                  rounded-2xl
                  border
                  border-red-500/50
                  bg-[#110d0d]/90
                  backdrop-blur-xl
                  px-5
                  py-4
                  shadow-2xl
                "
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <FaUser className="text-red-500" />

                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Divyansh Yadav
                  </h3>
                </div>

                <p className="text-red-400 text-sm sm:text-base ml-7">
                  Full-Stack Developer
                </p>

                <p className="text-red-400 text-sm sm:text-base ml-7 mt-1">
                  AI & ML Enthusiast
                </p>

                <div className="flex items-center gap-2 ml-7 mt-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  <span className="w-14 h-[1px] bg-red-500/70" />
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <div>
            {/* ABOUT LABEL */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex flex-col items-center">
                <span
                  className="
                    w-3
                    h-3
                    bg-red-500
                    rounded-full
                    shadow-[0_0_15px_rgba(239,68,68,0.8)]
                  "
                />

                <span className="w-[1px] h-12 bg-red-500 mt-2" />
              </div>

              <div className="-mt-9">
                <p className="text-lg tracking-wide">
                  <span className="text-red-500 font-semibold">
                    ABOUT ME
                  </span>
                </p>
              </div>
            </div>

            {/* MAIN HEADING */}
            <h1
              className="
                text-[36px]
                sm:text-[42px]
                lg:text-[44px]
                xl:text-[50px]
                leading-[1.07]
                font-extrabold
                tracking-tight
                text-white
                max-w-[700px]
              "
            >
              I build full-stack
              <br />

              experiences,
              <br />

              powered by{" "}

              <span className="text-red-500">
                code & AI
              </span>
              .
            </h1>

            {/* RED LINE */}
            <div className="w-24 h-[3px] bg-red-500 mt-4 mb-4 rounded-full" />

            {/* DESCRIPTION */}
            <div
              className="
                max-w-[720px]
                text-gray-400
                text-[15px]
                sm:text-base
                lg:text-[16px]
                leading-[1.65]
              "
            >
              <p>
                I'm Divyansh Yadav, a Computer Science student specializing
                in AI & ML and a full-stack developer who enjoys turning
                ideas into useful, polished products.
              </p>

              <p className="mt-2.5">
                I build with the MERN stack, explore AI-powered applications,
                and sharpen my problem-solving through DSA in Java. I care
                about clean interfaces just as much as the logic running
                behind them.
              </p>
            </div>

            {/* ================================================= */}
            {/* STATS CARDS */}
            {/* ================================================= */}

            <div className="grid sm:grid-cols-3 gap-4 mt-5 ">

              {/* DSA */}
              <div
                className="
                  group
                  relative
                  rounded-xl
                  flex flex-row
                  gap-4
                  justify-center items-center
                  border
                  border-white/20
                  bg-gradient-to-br
                  from-white/[0.06]
                  to-black/30
                  px-5
                  py-2
                  min-h-[90px]
                  hover:border-red-500/60
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(239,68,68,0.12)]
                  transition-all
                  duration-300
                "
              >
                <FaBullseye
                  className="
                    text-red-500
                    text-3xl
                    group-hover:scale-110
                    transition
                  "
                />

                <h3 className="text-2xl font-bold text-white">
                  500+
                <p className="text-gray-300 text-sm mt-0.5 leading-snug">
                  DSA Problems
                  <br />
                  Solved
                </p>
                </h3>

              </div>

              {/* MERN */}
              <div
                className="
                  group
                  rounded-xl
                  flex flex-row
                  gap-4
                  justify-center items-center
                  border
                  border-white/20
                  bg-gradient-to-br
                  from-white/[0.06]
                  to-black/30
                  px-5
                  py-2
                  min-h-[90px]
                  hover:border-red-500/60
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(239,68,68,0.12)]
                  transition-all
                  duration-300
                "
              >
                <FaLayerGroup
                  className="
                    text-red-500
                    text-3xl
                    group-hover:scale-110
                    transition
                  "
                />

                <h3 className="text-2xl font-bold text-white">
                  MERN
                <p className="text-gray-300 text-sm mt-0.5 leading-snug">
                  Full-Stack
                  <br />
                  Development
                </p>
                </h3>

              </div>

              {/* AI ML */}
              <div
                className="
                  group
                  rounded-xl
                  flex flex-row
                  gap-4
                  justify-center items-center
                  border
                  border-white/20
                  bg-gradient-to-br
                  from-white/[0.06]
                  to-black/30
                  px-5
                  py-2
                  min-h-[90px]
                  hover:border-red-500/60
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(239,68,68,0.12)]
                  transition-all
                  duration-300
                "
              >
                <MdOutlinePsychology
                  className="
                    text-red-500
                    text-3xl
                    group-hover:scale-110
                    transition
                  "
                />

                <h3 className="text-2xl font-bold text-white">
                  AI + ML
                <p className="text-gray-300 text-sm mt-0.5 leading-snug">
                  Intelligent
                  <br />
                  Experiences
                </p>
                </h3>

              </div>
            </div>

            {/* ================================================= */}
            {/* TECH STACK */}
            {/* ================================================= */}

            <div className="flex flex-wrap gap-2.5 mt-5">
              <TechBadge
                icon={<FaJava className="text-orange-400" />}
                name="Java"
              />
                <TechBadge
                  icon={<SiJavascript className="text-yellow-400" />}
                  name="JavaScript"
                />
              <TechBadge
                icon={<FaHtml5 className="text-orange-400" />}
                name="HTML"
              />
              <TechBadge
                icon={<FaCss className="text-blue-400" />}
                name="CSS"
              />


              <TechBadge
                icon={<FaReact className="text-cyan-400" />}
                name="React"
              />

              <TechBadge
                icon={<FaNodeJs className="text-green-500" />}
                name="Node.js"
              />
<TechBadge
  icon={<FaGit className="text-orange-400" />}
  name="Git"
/>
              <TechBadge
                icon={<SiExpress  />}
                name="Express"
              />

              <TechBadge
                icon={<SiMongodb className="text-green-500" />}
                name="MongoDB"
              />
              <TechBadge
                icon={<FaGithub className="text-orange-400" />}
                name="Github"
              />
            </div>

            {/* OPEN TO OPPORTUNITIES */}
            <div
              className="
                flex
                items-center
                gap-3
                mt-5
                text-gray-300
                text-sm
                sm:text-base
                font-medium
                tracking-wide
              "
            >
              <span
                className="
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-red-500
                  shadow-[0_0_15px_rgba(239,68,68,0.9)]
                  animate-pulse
                "
              />

              OPEN TO OPPORTUNITIES
            </div>

            {/* ================================================= */}
            {/* BUTTONS */}
            {/* ================================================= */}

            <div className="flex flex-col sm:flex-row gap-4 mt-5">
              <button
                onClick={scrollToProjects}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  bg-gradient-to-r
                  from-red-500
                  to-red-700
                  hover:from-red-600
                  hover:to-red-800
                  text-white
                  font-semibold
                  px-8
                  py-3
                  rounded-xl
                  shadow-[0_10px_30px_rgba(239,68,68,0.2)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                Explore My Work

                <FaArrowRight
                  className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform
                  "
                />
              </button>

              <button
                onClick={scrollToContact}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  border
                  border-red-500
                  text-red-300
                  hover:bg-red-500/10
                  hover:text-white
                  font-semibold
                  px-8
                  py-3
                  rounded-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                Let's Connect

                <FaHandshake
                  className="
                    group-hover:translate-y-1
                    transition-transform
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}


/* ================================================= */
/* TECH BADGE */
/* ================================================= */

function TechBadge({ icon, name }) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-2
        border
        border-white/15
        bg-white/[0.035]
        hover:bg-white/[0.07]
        hover:border-red-500/30
        rounded-full
        px-4
        py-2
        text-sm
        text-gray-200
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      <span
        className="
          text-lg
          group-hover:scale-110
          transition-transform
        "
      >
        {icon}
      </span>

      <span>{name}</span>
    </div>
  );
}

export default About;