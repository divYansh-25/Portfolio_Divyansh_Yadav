import AnimatedSection from "./AnimatedSection";

import {
  FaGlobe,
  FaCode,
  FaCalendarAlt,
} from "react-icons/fa";

const experiences = [
  {
    role: "Member in Web Development",
    company: "Google Developers Group - On Campus KIET",
    duration: "Oct 2024 - Oct 2025",
    points: [
      "Started my web development journey, building a strong foundation in modern web technologies.",
    ],
    tech: [
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
    ],
  },

  {
    role: "Member in CP/DSA",
    company: "Google Developers Group - On Campus KIET",
    duration: "Oct 2025 – Present",
    points: [
      "Learning and practicing DSA concepts through regular problem-solving and peer discussions.",
    ],
    tech: [
      "Java",
      "Data Structures",
      "Algorithms",
    ],
  },
];

function Experience() {
  return (
    <AnimatedSection>
      <section
        id="experience"
        className="
          relative
          scroll-mt-20
          px-[5%]
          md:px-[7%]
          py-16
          lg:py-14
          text-gray-200
          overflow-hidden
        "
      >

        {/* ======================================== */}
        {/* BACKGROUND EFFECTS */}
        {/* ======================================== */}

        <div
          className="
            absolute
            top-[20%]
            left-[15%]
            w-[300px]
            h-[300px]
            bg-red-600/[0.05]
            blur-[120px]
            rounded-full
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            bottom-[10%]
            right-[10%]
            w-[350px]
            h-[350px]
            bg-red-600/[0.04]
            blur-[140px]
            rounded-full
            pointer-events-none
          "
        />

        <div className="relative z-10 max-w-[1400px] mx-auto">

          {/* ======================================== */}
          {/* HEADING */}
          {/* ======================================== */}

          <div className="text-center mb-14 lg:mb-16">

            <h1
              className="
                text-4xl
                md:text-5xl
                lg:text-[54px]
                font-extrabold
                tracking-tight
                leading-tight
              "
            >
              <span className="text-white">
                Work{" "}
              </span>

              <span
                className="
                  bg-gradient-to-r
                  from-red-500
                  to-red-800
                  bg-clip-text
                  text-transparent
                "
              >
                Experience
              </span>
            </h1>

            <p
              className="
                text-center
                mt-4
                max-w-[700px]
                mx-auto
                text-gray-400
                text-sm
                sm:text-base
              "
            >
              My professional journey and hands-on development experience
            </p>

            {/* Decorative glowing line */}

            <div
              className="
                relative
                max-w-[650px]
                h-[1px]
                mx-auto
                mt-7
                bg-gradient-to-r
                from-transparent
                via-red-500/40
                to-transparent
              "
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2

                  w-24
                  h-[2px]

                  bg-red-500

                  shadow-[0_0_8px_rgba(239,68,68,1),0_0_20px_rgba(239,68,68,0.9),0_0_45px_rgba(239,68,68,0.7),0_0_80px_rgba(220,38,38,0.4)]
                "
              />
            </div>
          </div>

          {/* ======================================== */}
          {/* TIMELINE */}
          {/* ======================================== */}

          <div className="relative">

            {/* DESKTOP CENTER LINE */}

            <div
              className="
                hidden
                md:block

                absolute
                left-1/2
                top-0
                bottom-0

                w-[2px]

                -translate-x-1/2

                bg-gradient-to-b
                from-red-500
                via-red-500
                to-red-900/30

                shadow-[0_0_18px_rgba(239,68,68,0.55)]
              "
            />

            {/* MOBILE LEFT LINE */}

            <div
              className="
                md:hidden

                absolute
                left-[10px]
                top-0
                bottom-0

                w-[2px]

                bg-gradient-to-b
                from-red-500
                via-red-500
                to-red-900/30

                shadow-[0_0_15px_rgba(239,68,68,0.5)]
              "
            />

            {/* EXPERIENCES */}

            <div className="space-y-10 md:space-y-16">

              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="
                      relative
                      grid
                      md:grid-cols-2
                      items-center
                    "
                  >

                    {/* ================================= */}
                    {/* TIMELINE DOT */}
                    {/* ================================= */}

                    <div
                      className="
                        absolute

                        left-[3px]
                        md:left-1/2

                        top-[42px]
                        md:top-1/2

                        -translate-y-1/2
                        md:-translate-x-1/2

                        z-30

                        w-[16px]
                        h-[16px]

                        rounded-full

                        bg-red-500

                        shadow-[
                          0_0_12px_rgba(239,68,68,1),
                          0_0_28px_rgba(239,68,68,0.5)
                        ]
                      "
                    >
                      <span
                        className="
                          absolute
                          inset-[-6px]

                          rounded-full

                          border
                          border-red-500/20
                        "
                      />
                    </div>

                    {/* ================================= */}
                    {/* LEFT EXPERIENCE */}
                    {/* ================================= */}

                    {isLeft && (
                      <>
                        <div
                          className="
                            pl-10
                            md:pl-0
                            md:pr-14
                            lg:pr-16
                          "
                        >
                          <ExperienceCard
                            exp={exp}
                            index={index}
                          />
                        </div>

                        <div className="hidden md:block" />
                      </>
                    )}

                    {/* ================================= */}
                    {/* RIGHT EXPERIENCE */}
                    {/* ================================= */}

                    {!isLeft && (
                      <>
                        <div className="hidden md:block" />

                        <div
                          className="
                            pl-10
                            md:pl-14
                            lg:pl-16
                          "
                        >
                          <ExperienceCard
                            exp={exp}
                            index={index}
                          />
                        </div>
                      </>
                    )}

                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}


/* ================================================= */
/* EXPERIENCE CARD */
/* ================================================= */

function ExperienceCard({ exp, index }) {
  return (
    <div
      className="
        group
        relative

        rounded-2xl

        border


        bg-gradient-to-br
        from-[#1b0505]/90
        via-[#100606]/90
        to-black/80

        backdrop-blur-xl

        px-5
        py-6

        sm:p-7

        shadow-[0_15px_45px_rgba(0,0,0,0.35)]

      border-red-500/70
        hover:-translate-y-1

        hover:shadow-[
          0_18px_55px_rgba(0,0,0,0.45),
          0_0_25px_rgba(239,68,68,0.08)
        ]

        transition-all
        duration-500

        overflow-hidden
      "
    >

      {/* ================================= */}
      {/* SUBTLE CARD GLOW */}
      {/* ================================= */}

      <div
        className="
          absolute
          -top-20
          -left-20

          w-[200px]
          h-[200px]

          bg-red-500/[0.07]

          blur-[70px]

          rounded-full

          pointer-events-none
        "
      />

      {/* DOT PATTERN */}

      <div
        className="
          absolute
          right-4
          bottom-4

          grid
          grid-cols-5
          gap-[7px]

          opacity-20

          pointer-events-none
        "
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="
              w-[2px]
              h-[2px]
              bg-red-500
              rounded-full
            "
          />
        ))}
      </div>

      <div className="relative z-10">

        {/* ================================= */}
        {/* TOP ROW */}
        {/* ================================= */}

        <div
          className="
            flex
            flex-col
            sm:flex-row

            sm:items-center
            sm:justify-between

            gap-4

            mb-5
          "
        >

          {/* ROLE + ICON */}

          <div className="flex items-center gap-4">

            <div
              className="
                shrink-0

                w-12
                h-12

                sm:w-14
                sm:h-14

                flex
                items-center
                justify-center

                rounded-full

                border
                border-red-500/70

                bg-gradient-to-br
                from-red-500/20
                to-red-950/50

                text-red-500
                text-xl

                shadow-[0_0_20px_rgba(239,68,68,0.15)]

                group-hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]

                transition-all
                duration-300
              "
            >
              {index === 0 ? (
                <FaGlobe />
              ) : (
                <FaCode />
              )}
            </div>

            <h3
              className="
                text-lg
                sm:text-xl

                font-bold

                text-white

                leading-tight
              "
            >
              {exp.role}
            </h3>
          </div>

          {/* DATE */}

          <div
            className="
              flex
              items-center
              gap-2

              self-start
              sm:self-auto

              ml-16
              sm:ml-0

              px-3
              py-2

              rounded-lg

              border
              border-red-500/10

              bg-red-500/[0.08]

              text-red-400
              text-xs
              sm:text-sm

              whitespace-nowrap
            "
          >
            <FaCalendarAlt className="text-red-500" />

            {exp.duration}
          </div>
        </div>

        {/* ================================= */}
        {/* COMPANY */}
        {/* ================================= */}

        <div
          className="
            flex
            flex-wrap
            items-center

            gap-x-4
            gap-y-1

            ml-0
            sm:ml-[72px]

            mb-6

            text-sm
            sm:text-base

            text-gray-400
          "
        >
          <span>
            Google Developers Group
          </span>

          <span
            className="
              hidden
              sm:inline

              w-1
              h-1

              rounded-full

              bg-red-500
            "
          />

          <span>
            On Campus KIET
          </span>
        </div>

        {/* ================================= */}
        {/* DESCRIPTION */}
        {/* ================================= */}

        <ul
          className="
            ml-0
            sm:ml-[72px]

            mb-7

            space-y-2

            text-sm
            sm:text-[15px]

            text-gray-300

            leading-relaxed
          "
        >
          {exp.points.map((point, i) => (
            <li
              key={i}
              className="
                relative
                pl-4
              "
            >
              <span
                className="
                  absolute
                  left-0
                  top-[9px]

                  w-1.5
                  h-1.5

                  rounded-full

                  bg-red-500

                  shadow-[0_0_8px_rgba(239,68,68,0.8)]
                "
              />

              {point}
            </li>
          ))}
        </ul>

        {/* ================================= */}
        {/* TECH STACK */}
        {/* ================================= */}

        <div
          className="
            flex
            flex-wrap
            gap-2.5
          "
        >
          {exp.tech.map((tech, i) => (
            <span
              key={i}
              className="
                px-4
                py-1.5

                rounded-full

                border
                border-red-500/40

                bg-red-500/[0.05]

                text-xs
                sm:text-sm

                text-red-300

                hover:bg-red-500/10
                hover:border-red-500/70

                transition-all
                duration-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;