import { useTheme } from "../../context/ThemeContext";


const AccentSelectorHorizontal = () => {
  const { colorTheme, setColorTheme} = useTheme();

  return (
    <div className="flex items-center gap-4">
      {/* Blue Theme */}
      <label className="inline-flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="accent"
          checked={colorTheme === "blue"}
          onChange={() => setColorTheme("blue")}
          className="accent-primary"
        />
        <span className="text-sm">Blue</span>
      </label>

      {/* Green Theme */}
      <label className="inline-flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="accent"
          checked={colorTheme === "green"}
          onChange={() => setColorTheme("green")}
          className="accent-primary"
        />
        <span className="text-sm">Green</span>
      </label>

      {/* Purple Theme */}
      <label className="inline-flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="accent"
          checked={colorTheme === "purple"}
          onChange={() => setColorTheme("purple")}
          className="accent-primary"
        />
        <span className="text-sm">Purple</span>
      </label>
    </div>
  );
};

export default AccentSelectorHorizontal;
