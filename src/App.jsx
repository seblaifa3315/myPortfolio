import "./index.css";
import useDarkMode from "./hooks/usedarkMode";
import useAccent from "./hooks/useAccent";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";

export default function App() {
    const [dark, setDark] = useDarkMode();
    const [colorTheme, setColorTheme] =useAccent();

    return (
        <div className="">
            <Navbar dark={dark} setDark={setDark} colorTheme={colorTheme} setColorTheme={setColorTheme} />
            <Hero />
        </div>
    );
}

