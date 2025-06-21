import { useTheme } from "../../context/ThemeContext";

const AccentSelector = () => {
    const { colorTheme, setColorTheme} = useTheme();
 return (
        <div className="flex flex-col items-start gap-0">
            {/* Blue Theme */}
            <label className=" inline-flex items-center gap-2 cursor-pointer">
                <input type="radio" name="myAccent" checked={colorTheme === "blue"} onChange={() => setColorTheme("blue")} className="accent-primary scale-75" />
                <span className="text-[10px]">Blue</span>
            </label>

            {/* Green Theme */}
            <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="radio" name="myAccent" checked={colorTheme === "green"} onChange={() => setColorTheme("green")} className="accent-primary scale-75" />
                <span className="text-[10px]">Green</span>
            </label>

            {/* Purple Theme */}
            <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="radio" name="myAccent" checked={colorTheme === "purple"} onChange={() => setColorTheme("purple")} className="accent-primary scale-75" />
                <span className="text-[10px]">Purple</span>
            </label>
        </div>
    );
};

export default AccentSelector