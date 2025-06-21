import IconMoon from "../svgs/IconMoon"
import IconSun from "../svgs/IconSun"
import { useTheme } from "../../context/ThemeContext";

const ModeTogglerButton = () => {
  const { dark, setDark} = useTheme();

return (
    <label className="relative inline-flex items-center cursor-pointer w-12 h-6">
      <input
        type="checkbox"
        checked={dark}
        onChange={() => setDark(!dark)}
        className="sr-only peer"
      />

      {/* Track */}
      <div className="w-12 h-6 rounded-full transition-colors peer-checked:bg-primary bg-primary"  />

      {/* Knob with icon */}
      <div className="absolute top-0.5 left-0.5 peer-checked:left-6 w-5 h-5 rounded-full bg-white shadow transition-all flex items-center justify-center text-gray-800">
        {dark ? <IconSun className="w-3 h-3" /> : <IconMoon className="w-3 h-3" />}
      </div>
    </label>
    );
};


export default ModeTogglerButton