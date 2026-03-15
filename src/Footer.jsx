import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mt-24 bg-[#140000]/70 backdrop-blur-md border-t border-white/10 text-gray-200">

      {/* TOP */}
      <div className="px-[8%] py-12 text-center">

        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent">
          Divyansh Yadav
        </h2>

        <p className="mt-2 text-gray-400 text-sm">
          Building modern, scalable, and meaningful digital experiences.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-7 mt-6 text-2xl text-gray-300">

          <a
            href="https://github.com/divYansh-25"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 hover:-translate-y-1 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/divyansh-yadav-ba9261281/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 hover:-translate-y-1 transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://instagram.com/divyansh.yadav_25"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 hover:-translate-y-1 transition"
          >
            <RiInstagramLine />
          </a>

          <a
            href="https://x.com/Divyansh0025"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 hover:-translate-y-1 transition"
          >
            <FaXTwitter />
          </a>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 px-[8%] py-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Divyansh Yadav. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;