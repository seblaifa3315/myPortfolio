// src/components/AccentDropdown.jsx
import { useState, useRef, useEffect } from "react";
import IconThreeDot from "../svgs/IconThreeDot";
import SingleAccentSelector from "./SingleAccentSelector";
import { useLanguage } from "../../context/LanguageContext";


const AccentDropDown = () => {
  const {language} = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="true"
        aria-expanded={open}
        className="p-1 cursor-pointer hover:scale-140 "
      >
        <IconThreeDot className="w-6 h-6 text-primary 
" />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className="
            absolute right-0 mt-2
            bg-backgroundCard backdrop-blur-sm
            rounded-md shadow-lg z-50
          "
          role="menu"
        >
          <ul className="p-2 flex flex-col gap-2 w-43">
            <li><p className="text-[12px] text-textColor font-semibold ">
              {language ? "Choose your accent color:" : "Choisissez votre couleur:"}
            </p></li>
            <li><SingleAccentSelector color="blue" colorFrench="bleu" name="fromIcon"  /></li>
            <li><SingleAccentSelector color="green" colorFrench="vert" name="fromIcon"  /></li>
            <li><SingleAccentSelector color="purple" colorFrench="violet"name="fromIcon"  /></li>
            <li><SingleAccentSelector color="orange" colorFrench="orange" name="fromIcon"  /></li>
            <li><SingleAccentSelector color="cyan" colorFrench="cyan" name="fromIcon"  /></li>
            <li><SingleAccentSelector color="pink" colorFrench="rose" name="fromIcon"  /></li>
          </ul>
        </div>
      )}
    </div>
  );
}


export default AccentDropDown
