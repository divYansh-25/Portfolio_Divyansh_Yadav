import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Loader from "./Loader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // loader time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#1f0000] via-[#210000] to-black text-white overflow-x-hidden">

      <Header />

      <main className="pt-20">
        <Home />
        <About />
        <Experience/>
        <Skills/>
        <Projects />
        <Contact/>
        <Footer/>
      </main>

    </div>
  );
}

export default App;