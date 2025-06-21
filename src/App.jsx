import "./index.css";
import useDarkMode from "./hooks/usedarkMode";
import useAccent from "./hooks/useAccent";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

export default function App() {

    return (
        <div >
            <Navbar />
            <Hero />
            <About />
        </div>
    );
}

