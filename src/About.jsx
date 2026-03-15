import AnimatedSection from "./AnimatedSection";

import { MdOutlinePsychology } from "react-icons/md";
import { FaCode, FaUsers, FaRocket } from "react-icons/fa";

function About() {
  return (
    <AnimatedSection>
      <section
        id="about"
        className="scroll-mt-10 px-[8%] py-20 text-gray-200"
      >

        {/* TITLE */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent">
          About Me
        </h1>

        {/* SUBTITLE */}
        <p className="text-center max-w-[700px] mx-auto mt-4 mb-14 text-gray-400 leading-relaxed">
          Passionate software engineer focused on full-stack development,
          scalable architectures, and modern web technologies.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-7 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:shadow-red-500/20 hover:border-red-500/30 transition duration-300">

            <h2 className="text-xl font-semibold mb-4 text-center text-white">
              Professional Summary
            </h2>

            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              Aspiring Full-Stack developer and BTech student with strong
              foundations in MERN stack, Java, and modern web technologies.
              Passionate about building scalable applications and clean UI.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm">
              Actively learning backend architecture, databases, and cloud basics.
              Focused on continuous learning, problem-solving, and writing clean,
              maintainable code.
            </p>

          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* CODING */}
            <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:shadow-red-500/20 hover:border-red-500/30 transition duration-300">

              <div className="flex justify-center text-red-400 text-2xl mb-2">
                <FaCode />
              </div>

              <h2 className="text-center font-semibold mb-2">
                Coding
              </h2>

              <p className="text-center text-gray-300 text-sm leading-relaxed">
                Write maintainable and scalable code following best practices
              </p>

            </div>

            {/* PROBLEM SOLVER */}
            <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:shadow-red-500/20 hover:border-red-500/30 transition duration-300">

              <div className="flex justify-center text-red-400 text-2xl mb-2">
                <MdOutlinePsychology />
              </div>

              <h2 className="text-center font-semibold mb-2">
                Problem Solver
              </h2>

              <p className="text-center text-gray-300 text-sm leading-relaxed">
                Analytical mindset with creative solutions
              </p>

            </div>

            {/* TEAM PLAYER */}
            <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:shadow-red-500/20 hover:border-red-500/30 transition duration-300">

              <div className="flex justify-center text-red-400 text-2xl mb-2">
                <FaUsers />
              </div>

              <h2 className="text-center font-semibold mb-2">
                Team Player
              </h2>

              <p className="text-center text-gray-300 text-sm leading-relaxed">
                Strong collaboration and communication skills
              </p>

            </div>

            {/* FAST LEARNER */}
            <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:shadow-red-500/20 hover:border-red-500/30 transition duration-300">

              <div className="flex justify-center text-red-400 text-2xl mb-2">
                <FaRocket />
              </div>

              <h2 className="text-center font-semibold mb-2">
                Fast Learner
              </h2>

              <p className="text-center text-gray-300 text-sm leading-relaxed">
                Quickly adapt to new technologies and tools
              </p>

            </div>

          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default About;