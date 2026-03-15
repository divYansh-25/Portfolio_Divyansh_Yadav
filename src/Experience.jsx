import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Member in Web Development",
    company: "Google Developers Group - On Campus KIET",
    duration: "Oct 2024 - Oct 2025",
    points: [
      "Started my web development journey, building a strong foundation in modern web technologies.",
    ],
    tech: ["CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express"],
  },
  {
    role: "Member in CP/DSA",
    company: "Google Developers Group - On Campus KIET",
    duration: "Oct 2025 – Present",
    points: [
      "Learning and practicing DSA concepts through regular problem-solving and peer discussions.",
    ],
    tech: ["Java", "Data Structures", "Algorithms"],
  },
];

function Experience() {
  return (
    <AnimatedSection>
      <section id="experience" className="px-[8%] py-20 text-gray-200">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent">
          Work Experience
        </h1>

        <p className="text-center mt-4 mb-16 max-w-[700px] mx-auto text-gray-400">
          My professional journey and hands-on development experience
        </p>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-red-500 to-red-900 -translate-x-1/2 shadow-[0_0_20px_rgba(220,38,38,0.7)]" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative md:w-1/2 px-6 py-8 ${
                index % 2 === 0
                  ? "md:pr-16 md:text-left"
                  : "md:ml-auto md:pl-16"
              }`}
            >
              <div
                className={`hidden md:block absolute top-10 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.9)] ${
                  index % 2 === 0 ? "right-[-8px]" : "left-[-8px]"
                }`}
              />

              <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:shadow-red-500/20 hover:border-red-500/30 transition duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-1">
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <span className="text-sm text-red-400">{exp.duration}</span>
                </div>

                <span className="block text-sm text-gray-400 mb-3">
                  {exp.company}
                </span>

                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 mb-4">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Experience;