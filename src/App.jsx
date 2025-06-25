import "./index.css";
import useDarkMode from "./hooks/usedarkMode";
import useAccent from "./hooks/useAccent";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {

    return (
        <div >
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

