import React, { useState } from "react";
import {
  HiHome,
  HiUser,
  HiCodeBracket,
  HiBriefcase,
  HiFolder,
  HiEnvelope
} from "react-icons/hi2";

function Header() {

  const [active, setActive] = useState("home")

  const scrollToSection = (id) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const navItem = (id, icon, label) => (
    <li
      onClick={() => scrollToSection(id)}
      className={`
        flex items-center gap-1 md:gap-2
        cursor-pointer
        px-2 md:px-3
        py-1
        rounded-lg
        whitespace-nowrap
        transition-all duration-300
        ${active === id
          ? "text-white bg-white/10 shadow-inner"
          : "text-gray-300 hover:text-white hover:bg-white/5"
        }
      `}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </li>
  )

  return (
    <header className="fixed top-6 w-full flex justify-center z-50 px-2 md:px-4">

      <nav
        className="
        flex items-center
        max-w-full
        overflow-x-auto
        gap-1 md:gap-4
        px-3 md:px-8
        py-2 md:py-3
        rounded-full
        backdrop-blur-xl
        bg-white/5
        border border-white/10
        shadow-[0_0_40px_rgba(0,0,0,0.4)]
        "
      >

        <ul className="flex items-center gap-2 md:gap-6 font-medium text-sm md:text-base">

          {navItem("home", <HiHome className="text-lg"/>, "Home")}
          {navItem("about", <HiUser className="text-lg"/>, "About")}
          {navItem("experience", <HiBriefcase className="text-lg"/>, "Experience")}
          {navItem("skills", <HiCodeBracket className="text-lg"/>, "Skills")}
          {navItem("projects", <HiFolder className="text-lg"/>, "Projects")}
          {navItem("contact", <HiEnvelope className="text-lg"/>, "Contact")}

        </ul>

      </nav>

    </header>
  )
}

export default Header