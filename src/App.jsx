import "./index.css";
import useDarkMode from "./hooks/usedarkMode";
import Navbar from "./components/sections/Navbar";

export default function App() {
    const [dark, setDark] = useDarkMode();

    return (
        <div className="">
            <Navbar dark={dark} setDark={setDark} />
        </div>
    );
}

