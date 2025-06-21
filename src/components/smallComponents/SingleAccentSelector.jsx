import { useTheme } from "../../context/ThemeContext";

const SingleAccentSelector = ({color, name}) => {
    const { colorTheme, setColorTheme} = useTheme();
 return (
        <div className="flex flex-col items-start gap-0">
            {/* Purple Theme */}
            <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="radio" name={name} checked={colorTheme === `${color}`} onChange={() => setColorTheme(`${color}`)} className="accent-primary scale-75" />
                <span className="text-[12px] hover:scale-110 hover:font-semibold">{color}</span>
            </label>
        </div>
    );
};

export default SingleAccentSelector