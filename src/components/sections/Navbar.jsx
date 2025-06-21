import { useState } from "react";
import ModeTogglerButton from "../smallComponents/ModeTogglerButton";
import AccentSelector from "../smallComponents/AccentSelector";
import AccentSelectorHorizontal from "../smallComponents/AccentSelectorHorizontal";
import AnchorLink from "react-anchor-link-smooth-scroll";
import IconX from "../svgs/IconX";
import IconBurger from "../svgs/IconBurger";
import { useData } from "../../context/DataContext";
import AccentDropDown from "../smallComponents/AccentDropDown";
import SingleAccentSelector from "../smallComponents/SingleAccentSelector";

const Navbar = ({ dark, setDark, colorTheme, setColorTheme }) => {
    const { data, loading } = useData();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    const menuItems = ["Home", "About", "Skill", "Portfolio", "Contact"];

    if (loading) return <p>Loading...</p>;

    return (
        <nav className="flex items-center justify-between h-20 px-6 md:px-16 bg-transparent backdrop-blur-[2px] backdrop-saturate-150 text-textColor sticky top-0 z-50">
            {/* Logo */}
            <div className="text-3xl font-bold text-textColor hover:scale-110 transition-all duration-300">
                <AnchorLink href="#home" onClick={closeMenu}>
                    <span className="text-primary">{data.logoLeft}</span>
                    {data.logoRight}
                </AnchorLink>
            </div>

            {/* Hamburger button - mobile only */}
            <button onClick={toggleMenu} className="block md:hidden z-[100]" aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
                {menuOpen ? <IconX className="w-7 h-7 text-primary" /> : <IconBurger className="w-7 h-7 text-primary" />}
            </button>

            {/* Desktop menu*/}
            <div className="hidden md:flex md:items-center md:gap-8">
                <ul className="flex gap-8 text-[14px]">
                    {menuItems.map((skill, index) => (
                        <li key={index} className="relative group">
                            <AnchorLink
                                href={`#${skill.toLowerCase()}`}
                                className="
                                            font-semibold
                                            inline-block
                                            hover:text-primary
                                            transition
                                            after:content-['']
                                            after:absolute after:left-0 after:bottom-0
                                            after:w-full after:h-[2px]
                                            after:bg-primary
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
                <ModeTogglerButton />
                {/* <AccentSelector /> */}
                <AccentDropDown />
            </div>

            {/* Mobile sliding menu */}
            <div
                className={`
          fixed top-20 right-0 w-1/2 h-[calc(100vh-4rem)]
          flex flex-col gap-6 py-6 px-6 justify-start items-start
          bg-transparent backdrop-blur-[2px] backdrop-saturate-150
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
                  hover:text-primary
                  transition
                  relative
                  after:content-['']
                  after:absolute after:bottom-0 after:left-0
                  after:w-full after:h-[2px]
                  after:bg-primary
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
                <div className="flex flex-col items-start gap-6 mt-8 w-full justify-start">
                    <ModeTogglerButton />
                    <div className="flex flex-col gap-2">
                        <p className="text-[12px] text-textColor">Choose your accent color:</p>
                        <ul className="grid grid-cols-3 gap-2 w-full">
                            <li><SingleAccentSelector color="blue"  name="mobile"  /></li>
                            <li><SingleAccentSelector color="green"  name="mobile" /></li>
                            <li><SingleAccentSelector color="purple"  name="mobile" /></li>
                            <li><SingleAccentSelector color="orange"  name="mobile" /></li>
                            <li><SingleAccentSelector color="cyan"  name="mobile" /></li>
                            <li><SingleAccentSelector color="pink"  name="mobile" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
