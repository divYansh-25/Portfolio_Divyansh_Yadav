import { FaRocket } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

import todo from "./assets/todo.png";
import weather from "./assets/weather.png";

function Projects() {
  return (
    <AnimatedSection>
      <section id="projects" className="px-[8%] py-20 text-gray-200">

        <h1 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent">
          Projects
        </h1>

        <p className="text-center max-w-[700px] mx-auto mt-4 mb-16 text-gray-400 leading-relaxed">
          A selection of projects showcasing my expertise in full-stack
          development and modern technologies.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {/* PROJECT 1 */}
          <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-7 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:shadow-red-500/20 hover:border-red-500/30 transition duration-300">

            <img src={todo} alt="Todo App" className="w-16 h-16 mb-4 object-contain"/>

            <h2 className="text-xl font-semibold mb-3">To-do List Web App</h2>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Todo Manager for organizing tasks, boosting productivity, and staying focused.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {["HTML","CSS","JavaScript"].map((tech,i)=>(
                <span key={i}
                className="text-xs px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/divYansh-25"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-white text-black font-semibold hover:scale-105 transition"
              >
                <FaGithub /> Code
              </a>

              <a
                href="https://divyansh-25.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-red-600 to-red-900 text-white font-semibold hover:scale-105 transition"
              >
                <FiExternalLink /> Demo
              </a>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-7 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:shadow-red-500/20 hover:border-red-500/30 transition duration-300">

            <img src={weather} alt="Weather App" className="w-16 h-16 mb-4 object-contain"/>

            <h2 className="text-xl font-semibold mb-3">
              Climo Weather Dashboard
            </h2>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Real-time weather dashboard using public APIs with location search functionality.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {["HTML","CSS","JavaScript","API"].map((tech,i)=>(
                <span key={i}
                className="text-xs px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/divYansh-25/Climo_weather_website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-white text-black font-semibold hover:scale-105 transition"
              >
                <FaGithub /> Code
              </a>

              <a
                href="https://divyansh-25.github.io/Climo_weather_website/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-red-600 to-red-900 text-white font-semibold hover:scale-105 transition"
              >
                <FiExternalLink /> Demo
              </a>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-7 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:shadow-red-500/20 hover:border-red-500/30 transition duration-300">

            <FaRocket className="text-4xl text-red-400 mb-4"/>

            <h2 className="text-xl font-semibold mb-3">
              Snippz Snippet Manager
            </h2>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Centralized code snippet manager to organize, save, delete and reuse snippets efficiently.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {["React","Tailwind","Vercel"].map((tech,i)=>(
                <span key={i}
                className="text-xs px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/divYansh-25/Snippz-Snippet-Manager"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-white text-black font-semibold hover:scale-105 transition"
              >
                <FaGithub /> Code
              </a>

              <a
                href="https://snippz-snippet-manager.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-red-600 to-red-900 text-white font-semibold hover:scale-105 transition"
              >
                <FiExternalLink /> Demo
              </a>
            </div>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default Projects;