import { useState } from "react";
import ModeTogglerButton from "../smallComponents/ModeTogglerButton";
import AccentSelector from "../smallComponents/AccentSelector";
import AccentSelectorHorizontal from "../smallComponents/AccentSelectorHorizontal";
import AnchorLink from "react-anchor-link-smooth-scroll";
import IconX from "../svgs/IconX";
import IconBurger from "../svgs/IconBurger";

const Navbar = ({ dark, setDark, colorTheme, setColorTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const menuItems = ["Home", "About", "Skill", "Portfolio", "Contact"];

  return (
    <nav className="flex items-center justify-between h-20 px-6 md:px-16 bg-background text-textColor sticky top-0 z-40 bg-opacity-90">
      {/* Logo */}
      <div>
        <AnchorLink
          href="#"
          className="text-3xl font-bold text-textColor"
          onClick={closeMenu}
        >
          <span className="text-AccentColor">Seb</span>.Dev
        </AnchorLink>
      </div>

      {/* Hamburger button - mobile only */}
      <button
        onClick={toggleMenu}
        className="block md:hidden z-50"
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <IconX className="w-7 h-7 text-AccentColor" />
        ) : (
          <IconBurger className="w-7 h-7 text-AccentColor" />
        )}
      </button>

      {/* Desktop menu*/}
      <div className="hidden md:flex md:items-center md:gap-8">
        <ul className="flex gap-8 text-[14px]">
          {menuItems.map((skill, index) => (
            <li key={index} className="relative group">
              <AnchorLink
                href={`#${skill.toLowerCase()}`}
                className="
                  inline-block
                  hover:text-AccentColor
                  transition
                  after:content-['']
                  after:absolute after:left-0 after:bottom-0
                  after:w-full after:h-[2px]
                  after:bg-AccentColor
                  after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-300
                  group-hover:after:scale-x-100
                "
                onClick={closeMenu}
              >
                {skill}
              </AnchorLink>
            </li>
          ))}
        </ul>
        <ModeTogglerButton dark={dark} setDark={setDark} />
        <AccentSelector colorTheme={colorTheme} setColorTheme={setColorTheme} />
      </div>

      {/* Mobile sliding menu */}
      <div
        className={`
          fixed top-16 right-0 w-1/2 h-[calc(100vh-4rem)]
          flex flex-col gap-6 py-6 px-6 justify-start items-start
          bg-background/90 backdrop-blur-sm
          z-40
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}

          md:hidden
        `}
      >
        <ul className="flex flex-col w-full gap-6">
          {menuItems.map((skill, index) => (
            <li key={index} className="w-full group relative">
              <AnchorLink
                href={`#${skill.toLowerCase()}`}
                className="
                  block w-full py-2
                  hover:text-AccentColor
                  transition
                  relative
                  after:content-['']
                  after:absolute after:bottom-0 after:left-0
                  after:w-full after:h-[2px]
                  after:bg-AccentColor
                  after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-300
                  group-hover:after:scale-x-100
                "
                onClick={closeMenu}
              >
                {skill}
              </AnchorLink>
            </li>
          ))}
        </ul>

        {/* mode and accent controler */}
        <div className="flex flex-col items-start gap-4 mt-8 w-full justify-start">
          <ModeTogglerButton dark={dark} setDark={setDark} />
          <AccentSelectorHorizontal colorTheme={colorTheme} setColorTheme={setColorTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;