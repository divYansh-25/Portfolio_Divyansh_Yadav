import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  try {
    await emailjs.send(
  "service_5d5e22i",   // your service id
  "template_eqakbsf",    // template id from EmailJS
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  "uGPznCP1qT4RGIsXh"         // your EmailJS public key
);

    setStatus("✅ Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });

  } catch (error) {
    setStatus("❌ Failed to send message");
  }

  setLoading(false);
};

  return (
    <AnimatedSection>
      <section id="contact" className="px-[8%] py-20 text-gray-200">

        {/* TITLE */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent">
          Get In Touch
        </h1>

        <p className="text-center text-gray-400 mt-3 mb-16 max-w-[700px] mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">

          {/* FORM CARD */}
          <div className="bg-[#140000]/70 border border-white/10 rounded-2xl p-7 backdrop-blur-md shadow-xl">

            <h2 className="text-xl font-semibold mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-red-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-red-500 outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Project inquiry (Optional)"
                value={formData.subject}
                onChange={handleChange}
                className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-red-500 outline-none"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-red-500 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-2 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-red-600 to-red-900 hover:scale-105 transition shadow-lg shadow-red-900/40"
              >
                {loading ? "Sending..." : "✈ Send Message"}
              </button>

              {status && (
                <p className="text-sm text-gray-400 mt-2">{status}</p>
              )}

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* EMAIL CARD */}
            <div className="flex gap-4 items-center bg-[#140000]/70 border border-white/10 rounded-2xl p-5 backdrop-blur-md">

              <FiMail className="text-2xl text-red-400" />

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400 text-sm">
                  divyansh.2428cseaiml@kiet.edu
                </p>

                <a
                  href="mailto:divyansh.2428cseaiml@kiet.edu"
                  className="text-red-400 text-sm hover:underline"
                >
                  Send email
                </a>
              </div>
            </div>

            {/* LINKEDIN */}
            <div className="flex gap-4 items-center bg-[#140000]/70 border border-white/10 rounded-2xl p-5 backdrop-blur-md">

              <FaLinkedinIn className="text-2xl text-red-400" />

              <div>
                <h3 className="font-semibold">LinkedIn</h3>

                <a
  href="https://www.linkedin.com/in/divyansh-yadav25/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-red-400 text-sm hover:underline"
>
  Divyansh Yadav
</a>
              </div>
            </div>

            {/* CTA CARD */}
            <div className="bg-gradient-to-r from-red-600 to-red-900 rounded-2xl p-7 text-white">

              <h2 className="text-xl font-semibold mb-2">
                Let’s Build Something Amazing
              </h2>

              <p className="text-sm text-gray-200">
                I’m always excited to discuss new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>

            </div>

          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default GetInTouch;