import AnimatedSection from "./AnimatedSection";

function Skills() {
  return (
    <AnimatedSection>
      <section id="skills" className="px-[8%] py-20 text-gray-200">

        {/* TITLE */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent">
          Technical Skills
        </h1>

        <p className="text-center mt-3 mb-16 text-gray-400 max-w-[700px] mx-auto">
          Comprehensive skill set across the full development stack
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* FRONTEND */}
          <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-7 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:shadow-red-500/20 hover:border-red-500/30 transition duration-300">

            <h2 className="text-xl font-bold mb-6 text-red-400">
              Frontend
            </h2>

            {[
              ["HTML", "Expert"],
              ["JavaScript", "Expert"],
              ["React.js", "Advanced"],
              ["Tailwind CSS", "Intermediate"],
            ].map(([skill, level], i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-black/30 px-4 py-2 rounded-xl mb-3 hover:bg-white/5 transition"
              >
                <span>{skill}</span>

                <span
                  className={`text-xs px-3 py-1 rounded-full border ${
                    level === "Expert"
                      ? "bg-red-500/10 border-red-500/30 text-red-300"
                      : level === "Advanced"
                      ? "bg-red-400/10 border-red-400/30 text-red-200"
                      : "bg-red-300/10 border-red-300/30 text-red-100"
                  }`}
                >
                  {level}
                </span>
              </div>
            ))}
          </div>

          {/* BACKEND */}
          <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-7 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:shadow-red-500/20 hover:border-red-500/30 transition duration-300">

            <h2 className="text-xl font-bold mb-6 text-red-400">
              Backend
            </h2>

            {[
              ["Node.js", "Advanced"],
              ["Express.js", "Advanced"],
              ["Java", "Intermediate"],
              ["SpringBoot", "Intermediate"],
            ].map(([skill, level], i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-black/30 px-4 py-2 rounded-xl mb-3 hover:bg-white/5 transition"
              >
                <span>{skill}</span>

                <span
                  className={`text-xs px-3 py-1 rounded-full border ${
                    level === "Expert"
                      ? "bg-red-500/10 border-red-500/30 text-red-300"
                      : level === "Advanced"
                      ? "bg-red-400/10 border-red-400/30 text-red-200"
                      : "bg-red-300/10 border-red-300/30 text-red-100"
                  }`}
                >
                  {level}
                </span>
              </div>
            ))}
          </div>

          {/* DATABASE */}
          <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-7 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:shadow-red-500/20 hover:border-red-500/30 transition duration-300">

            <h2 className="text-xl font-bold mb-6 text-red-400">
              Database
            </h2>

            {[
              ["MongoDB", "Advanced"],
              ["MySQL", "Advanced"],
            ].map(([skill, level], i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-black/30 px-4 py-2 rounded-xl mb-3 hover:bg-white/5 transition"
              >
                <span>{skill}</span>

                <span
                  className={`text-xs px-3 py-1 rounded-full border ${
                    level === "Expert"
                      ? "bg-red-500/10 border-red-500/30 text-red-300"
                      : level === "Advanced"
                      ? "bg-red-400/10 border-red-400/30 text-red-200"
                      : "bg-red-300/10 border-red-300/30 text-red-100"
                  }`}
                >
                  {level}
                </span>
              </div>
            ))}
          </div>

        </div>

      </section>
    </AnimatedSection>
  );
}

export default Skills;