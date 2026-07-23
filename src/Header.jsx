import React, { useEffect, useState } from "react";
import {
  HiHome,
  HiUser,
  HiCodeBracket,
  HiBriefcase,
  HiFolder,
  HiEnvelope,
} from "react-icons/hi2";

function Header() {
  const [active, setActive] = useState("home");

  // Automatically update navbar active item while scrolling
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "experience",
      "projects",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,

        // Section becomes active when it reaches
        // the middle area of the screen
        rootMargin: "-35% 0px -55% 0px",

        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    setActive(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navItem = (id, icon, label) => (
    <li
      key={id}
      onClick={() => scrollToSection(id)}
      className={`
        flex items-center gap-1 md:gap-2
        cursor-pointer
        px-2 md:px-3
        py-1
        rounded-lg
        whitespace-nowrap
        transition-all duration-300
        ${
          active === id
            ? "text-white bg-red-800/100 shadow-inner"
            : "text-gray-300 hover:text-white hover:bg-red-500/90 hover:shadow-[0_12px_30px_rgba(239,68,68,0.12)] "
        }
      `}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </li>
  );

  return (
    <header className="fixed top-6 w-full flex justify-center z-50 px-2 md:px-4 ">
      <nav
        className="
          flex items-center
          max-w-full
          overflow-x-auto
          gap-3 md:gap-6
          px-4 md:px-8
          py-2 md:py-3
          rounded-full
          backdrop-blur-xl
          bg-white/5
          border border-red-500/60
          shadow-[0_0_40px_rgba(0,0,0,0.4)]
        "
      >
        {/* Logo */}
        <a href="divyanshyadav.in">
        <img
          src="/ee.png"
          alt="DY Logo"
          className="
          w-8 h-8
          md:w-10 md:h-10
          object-contain
          shrink-0
          transition-all duration-300
          hover:scale-110
          "
          style={{
            filter: "drop-shadow(0 0 12px rgba(239,68,68,0.6))",
          }}
          />
          </a>

        {/* Navigation */}
        <ul className="flex items-center gap-2 md:gap-6 font-medium text-sm md:text-base">
          {navItem("home", <HiHome className="text-lg" />, "Home")}

          {navItem("about", <HiUser className="text-lg" />, "About")}

          {navItem(
            "experience",
            <HiBriefcase className="text-lg" />,
            "Experience"
          )}

          {navItem(
            "projects",
            <HiFolder className="text-lg" />,
            "Projects"
          )}

          {navItem(
            "contact",
            <HiEnvelope className="text-lg" />,
            "Contact"
          )}
        </ul>
      </nav>
    </header>
  );
}
//ho gaya
export default Header;