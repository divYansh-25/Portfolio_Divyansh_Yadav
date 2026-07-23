import { useState } from "react";

import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaBrain,
  FaBolt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiVercel,
  SiCss,
} from "react-icons/si";

import { FiExternalLink } from "react-icons/fi";

import AnimatedSection from "./AnimatedSection";

import scs from "./assets/scs.png";
import weather from "./assets/weather.png";
import snippz from "./assets/snippz.png";

function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      number: "01",
      category: "FULL-STACK + AI",
      title: "Smart Complaint System",

      description:
        "AI-powered complaint management platform for submitting, tracking, analyzing, and managing public complaints with intelligent AI insights and role-based access control.",
      image:scs,
      

      technologies: [
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "AI", icon: <FaBrain className="text-red-400" /> },
      ],

      github: "https://github.com/divYansh-25/AI_FSD_ESE",

      demo:
        "https://smart-complaint-frontend-yp1l.onrender.com/",
    },

    {
      number: "02",
      category: "FRONTEND + API",
      title: "Climo Weather Dashboard",

      description:
        "A real-time weather dashboard that delivers accurate weather information using public APIs with location search, responsive UI, and a clean user experience.",

      image: weather,

      technologies: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss className="text-blue-400" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "Weather API", icon: <FaBolt className="text-red-400" /> },
      ],

      github:
        "https://github.com/divYansh-25/Climo_weather_website",

      demo:
        "https://divyansh-25.github.io/Climo_weather_website/",
    },

    {
      number: "03",
      category: "REACT APPLICATION",
      title: "Snippz Snippet Manager",

      description:
        "A centralized code snippet manager designed to organize, save, manage, delete, and reuse code snippets efficiently through a clean and modern interface.",

      image: snippz,

      technologies: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        { name: "Vercel", icon: <SiVercel /> },
      ],

      github:
        "https://github.com/divYansh-25/Snippz-Snippet-Manager",

      demo:
        "https://snippz-snippet-manager.vercel.app/",
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const previousProject = () => {
    setActiveProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const getPosition = (index) => {
    if (index === activeProject) return "active";

    if (
      index ===
      (activeProject - 1 + projects.length) % projects.length
    ) {
      return "left";
    }

    return "right";
  };

  return (
    <AnimatedSection>
      <section
        id="projects"
        className="
          relative
          scroll-mt-20
          px-[5%]
          md:px-[7%]
          py-16
          lg:py-12
          text-gray-200
          overflow-hidden
        "
      >
        {/* ================================================= */}
        {/* BACKGROUND DECORATION */}
        {/* ================================================= */}

        <div
          className="
            absolute
            top-[28%]
            left-1/2
            -translate-x-1/2
            w-[80%]
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-red-500/70
            to-transparent
            shadow-[0_0_18px_rgba(239,68,68,0.6)]
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            top-[15%]
            right-[5%]
            w-[300px]
            h-[300px]
            bg-red-500/[0.04]
            blur-[120px]
            rounded-full
            pointer-events-none
          "
        />

        <div className="relative z-10 max-w-[1450px] mx-auto">

          {/* ================================================= */}
          {/* SECTION HEADER */}
          {/* ================================================= */}

          <div className="mb-8 lg:mb-7">

            <div
              className="
                flex
                items-center
                gap-3
                text-sm
                text-gray-400
                tracking-wide
                mb-3
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-red-500
                  shadow-[0_0_12px_rgba(239,68,68,0.9)]
                "
              />

              SELECTED WORK
            </div>

            <h1
              className="
                text-[38px]
                sm:text-5xl
                lg:text-[52px]
                xl:text-[58px]
                leading-[1.05]
                font-extrabold
                tracking-tight
                text-white
              "
            >
              Projects that turned ideas 

              <br className="hidden sm:block" />

              into{" "}

              <span className="text-red-500">
                real products
              </span>
              .
            </h1>

            <p
              className="
                mt-4
                text-gray-400
                text-sm
                sm:text-base
                max-w-[850px]
              "
            >
              A showcase of expertise in full-stack development,
              modern technologies, and AI integration.
            </p>
          </div>

          {/* ================================================= */}
          {/* 3D CAROUSEL */}
          {/* ================================================= */}

          <div
            className="
              relative
              lg:h-[510px]
              xl:h-[540px]
              perspective-[1600px]
            "
          >
            {projects.map((project, index) => {
              const position = getPosition(index);

              return (
                <div
                  key={project.number}
                  className={`
                    lg:absolute
                    lg:top-0
                    lg:left-1/2
                    lg:w-[88%]
                    xl:w-[90%]

                    transition-all
                    duration-700
                    ease-in-out

                    ${
                      position === "active"
                        ? `
                          relative
                          lg:-translate-x-1/2
                          lg:translate-z-0
                          opacity-100
                          z-30
                          scale-100
                          pointer-events-auto
                        `
                        : ""
                    }

                    ${
                      position === "left"
                        ? `
                          hidden
                          lg:block
                          lg:-translate-x-[115%]
                          lg:scale-[0.78]
                          lg:-rotate-y-[18deg]
                          opacity-35
                          z-10
                          pointer-events-none
                        `
                        : ""
                    }

                    ${
                      position === "right"
                        ? `
                          hidden
                          lg:block
                          lg:translate-x-[15%]
                          lg:scale-[0.78]
                          lg:rotate-y-[18deg]
                          opacity-35
                          z-10
                          pointer-events-none
                        `
                        : ""
                    }
                  `}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >

                  {/* PROJECT CARD */}
                  <div
                    className="
                      relative
                      overflow-hidden

                      rounded-2xl

                      border
                      border-red-500/30

                      bg-gradient-to-br
                      from-[#170707]/95
                      via-[#080808]/95
                      to-black/95

                      shadow-[0_25px_80px_rgba(0,0,0,0.6)]

                      lg:min-h-[490px]
                    "
                  >

                    {/* RED GLOW */}
                    <div
                      className="
                        absolute
                        -top-[150px]
                        -left-[100px]
                        w-[450px]
                        h-[450px]
                        bg-red-600/15
                        blur-[100px]
                        rounded-full
                        pointer-events-none
                      "
                    />

                    {/* LARGE NUMBER */}
                    <span
                      className="
                        absolute
                        top-5
                        right-7

                        text-[65px]
                        lg:text-[75px]

                        leading-none
                        font-black

                        text-red-500/60

                        z-10
                      "
                    >
                      {project.number}
                    </span>

                    {/* CARD CONTENT */}
                    <div
                      className="
                        relative
                        z-10

                        grid
                        lg:grid-cols-[1.35fr_0.85fr]

                        gap-7
                        lg:gap-12

                        p-5
                        sm:p-7
                        lg:p-10

                        items-center
                      "
                    >

                      {/* ================================= */}
                      {/* PROJECT IMAGE */}
                      {/* ================================= */}

                      <div
                        className="
                          relative
                          flex
                          items-center
                          justify-center
                          min-h-[250px]
                          sm:min-h-[330px]
                          lg:min-h-[400px]
                        "
                        style={{
                          perspective: "1200px",
                        }}
                      >

                        {/* IMAGE GLOW */}
                        <div
                          className="
                            absolute
                            

                          
                          

                            rounded-full
                          "
                        />

                        {/* IMAGE FRAME */}
                        <div
                          className="
                            relative
                            w-full
                            
                            lg:-rotate-y-[7deg]
                            lg:rotate-x-[2deg]

                            hover:rotate-20deg

                            transition-transform
                            duration-500
                          "
                          style={{
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="
                              w-full
                              aspect-[16/10]
                              object-cover
                              object-top
                              rounded-lg
                            "
                          />

                          {/* SCREEN REFLECTION */}
                          {/* <div
                            className="
                              absolute
                              inset-0

                              bg-gradient-to-br

                          

                              rounded-xl

                              pointer-events-none
                            "
                          /> */}
                        </div>
                      </div>

                      {/* ================================= */}
                      {/* PROJECT DETAILS */}
                      {/* ================================= */}

                      <div className="relative pt-8 lg:pt-5">

                        <p
                          className="
                            text-red-500
                            text-sm
                            tracking-wide
                            mb-3
                          "
                        >
                          {project.category}
                        </p>

                        <h2
                          className="
                            text-2xl
                            sm:text-3xl
                            lg:text-[32px]

                            font-bold
                            text-white

                            leading-tight

                            mb-4
                          "
                        >
                          {project.title}
                        </h2>

                        <p
                          className="
                            text-gray-400

                            text-sm
                            sm:text-base
                            hidden sm:flex

                            leading-relaxed

                            max-w-[500px]
                          "
                        >
                          {project.description}
                        </p>

                        {/* TECHNOLOGIES */}
                        <div
                          className="
                            flex
                            flex-wrap
                            gap-2.5

                            mt-5
                          "
                        >
                          {project.technologies.map(
                            (technology) => (
                              <span
                                key={technology.name}
                                className="
                                  flex
                                  items-center
                                  gap-2

                                  px-3
                                  py-2

                                  rounded-lg

                                  border
                                  border-white/[0.06]

                                  bg-white/[0.045]

                                  text-xs
                                  sm:text-sm

                                  text-gray-200
                                "
                              >
                                <span className="text-base">
                                  {technology.icon}
                                </span>

                                {technology.name}
                              </span>
                            )
                          )}
                        </div>

                        {/* BUTTONS */}
                        <div
                          className="
                            flex
                            flex-wrap
                            gap-3

                            mt-7
                          "
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex
                              items-center
                              justify-center
                              gap-2

                              px-5
                              py-3

                              rounded-lg

                              bg-white
                              text-black

                              text-sm
                              font-semibold

                              hover:scale-105

                              transition-transform
                              duration-300
                            "
                          >
                            View Live

                            <FiExternalLink />
                          </a>

                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex
                              items-center
                              justify-center
                              gap-2

                              px-5
                              py-3

                              rounded-lg

                              bg-gradient-to-r
                              from-red-600
                              to-red-900

                              text-white

                              text-sm
                              font-semibold

                              hover:scale-105

                              transition-transform
                              duration-300
                            "
                          >
                            <FaGithub />

                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* LEFT CAROUSEL ARROW */}
            <button
              onClick={previousProject}
              aria-label="Previous project"
              className="
                hidden
                lg:flex

                absolute
                z-50

                left-0
                top-1/2
                -translate-y-1/2

                w-14
                h-14

                items-center
                justify-center

                rounded-full

                border
                border-red-500

                bg-black/80
                backdrop-blur-xl

                text-white
                text-xl

                shadow-[0_0_25px_rgba(239,68,68,0.25)]

                hover:bg-red-500
                hover:scale-110

                transition-all
                duration-300
              "
            >
              <FaArrowLeft />
            </button>

            {/* RIGHT CAROUSEL ARROW */}
            <button
              onClick={nextProject}
              aria-label="Next project"
              className="
                hidden
                lg:flex

                absolute
                z-50

                right-0
                top-1/2
                -translate-y-1/2

                w-14
                h-14

                items-center
                justify-center

                rounded-full

                border
                border-red-500

                bg-black/80
                backdrop-blur-xl

                text-white
                text-xl

                shadow-[0_0_25px_rgba(239,68,68,0.25)]

                hover:bg-red-500
                hover:scale-110

                transition-all
                duration-300
              "
            >
              <FaArrowRight />
            </button>
          </div>

          {/* ================================================= */}
          {/* CAROUSEL NAVIGATION */}
          {/* ================================================= */}

          <div
            className="
              flex
              items-center
              justify-between

              gap-5

              mt-6
              lg:mt-2
            "
          >

            {/* PREVIOUS */}
            <button
              onClick={previousProject}
              className="
                flex
                items-center
                gap-2

                px-4
                py-2.5

                rounded-lg

                border
                border-red-500/30

                text-sm
                text-gray-300

                hover:border-red-500
                hover:text-white

                transition-all
              "
            >
              <FaArrowLeft className="text-red-500" />

              <span className="hidden sm:inline">
                Previous
              </span>
            </button>

            {/* PROGRESS */}
            <div className="flex-1 max-w-[360px]">

              <p
                className="
                  text-center
                  text-lg
                  text-white
                  mb-3
                "
              >
                {String(activeProject + 1).padStart(2, "0")}

                <span className="text-gray-500">
                  {" "}
                  / 03
                </span>
              </p>

              <div
                className="
                  relative
                  h-[5px]

                  bg-white/10

                  rounded-full

                  overflow-hidden
                "
              >
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full

                    bg-red-500

                    rounded-full

                    shadow-[0_0_12px_rgba(239,68,68,0.8)]

                    transition-all
                    duration-500
                  "
                  style={{
                    width: `${
                      ((activeProject + 1) /
                        projects.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* NEXT */}
            <button
              onClick={nextProject}
              className="
                flex
                items-center
                gap-2

                px-4
                py-2.5

                rounded-lg

                border
                border-red-500/30

                text-sm
                text-gray-300

                hover:border-red-500
                hover:text-white

                transition-all
              "
            >
              <span className="hidden sm:inline">
                Next
              </span>

              <FaArrowRight className="text-red-500" />
            </button>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Projects;