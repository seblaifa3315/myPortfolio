import { useState } from "react";
import ModeTogglerButton from "../smallComponents/ModeTogglerButton";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import IconX from "../svgs/IconX";
import IconBurger from "../svgs/IconBurger";
import { useData } from "../../context/DataContext";
import { useLanguage } from "../../context/LanguageContext";
import AccentDropDown from "../smallComponents/AccentDropDown";
import SingleAccentSelector from "../smallComponents/SingleAccentSelector";
import france from "../../assets/france.png";
import usa from "../../assets/united-states.png";




const Navbar = () => {
    const { data, loading } = useData();
    const {language, setLanguage} = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleLanguage = () => setLanguage((prev) => !prev);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    const menuItems = ["Home", "About", "Skills", "Portfolio", "Contact"];
    const menuItemsFrench = ["Accueil", "A propos", "Compétences", "Portfolio", "Contact"];

    if (loading) return <p>Loading...</p>;

    return (
        <nav className="flex items-center justify-between h-16 px-6 md:px-10 lg:px-16 bg-background/95 backdrop-blur-[2px] backdrop-saturate-150 text-textColor sticky top-0 z-50">
            {/* Logo */}
            <div className="text-3xl font-bold text-textColor hover:scale-110 transition-all duration-300">
                <a href="#home" onClick={closeMenu}>
                    <span className="text-primary">{data.logoLeft}</span>
                    {data.logoRight}
                </a>
            </div>

            {/* Hamburger button - mobile only */}
            <button onClick={toggleMenu} className="block md:hidden z-[100]" aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
                {menuOpen ? <IconX className="w-7 h-7 text-primary" /> : <IconBurger className="w-7 h-7 text-primary" />}
            </button>

            {/* Desktop menu*/}
            <div className={`hidden md:flex md:items-center md:gap-4 lg:gap-8 ${!language && "md:ml-4 lg:ml-0"}`}>
                <ul className="flex gap-8 md:gap-5 lg:gap-8 text-[14px]">
                    {language? menuItems.map((item, index) => (
                        <li key={index} className="relative group">
                            <a
                                href={`#${item.toLowerCase()}`}
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
                                {item}
                            </a>
                        </li>
                    ))
                : menuItemsFrench.map((item, index) => (
                        <li key={index} className="relative group">
                            <a
                                href={`#${menuItems[index].toLowerCase()}`}
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
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <ModeTogglerButton />
                {/* <AccentSelector /> */}
                <AccentDropDown />
                {/* Flag Selector */}
                <button onClick={toggleLanguage} className="w-6 h-6 cursor-pointer hover:scale-105 transition-all duration-100">
                    {language ? <img src={france} alt="french flag" />  : <img src={usa} alt="usa flag" /> }
                </button>


            </div>

            {/* Mobile sliding menu */}
            <div
                className={`
          fixed top-20 right-0 w-1/2
          flex flex-col gap-6 py-6 px-6 justify-start items-start
          bg-background backdrop-blur-[2px] backdrop-saturate-150
          z-40 border-l-1  border-b-1 border-l-primary/50 border-b-primary/50 rounded-bl-lg
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}

          md:hidden
        `}
            >
                <ul className="flex flex-col w-full gap-6">
                    {language ? menuItems.map((item, index) => (
                        <li key={index} className="w-full group relative">
                            <a
                                href={`#${item.toLowerCase()}`}
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
                                {item}
                            </a>
                        </li>
                    ))
                : menuItemsFrench.map((item, index) => (
                        <li key={index} className="w-full group relative">
                            <a
                                href={`#${menuItems[index].toLowerCase()}`}
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
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* mode and accent controler */}
                <div className="flex flex-col items-start gap-6 mt-8 w-full justify-start">
                    <ModeTogglerButton />
                    <div className="flex flex-col gap-2">
                        <p className="text-[12px] text-textColor">Choose your accent color:</p>
                        <ul className="grid grid-cols-3 gap-2 w-full">
                            <li><SingleAccentSelector color="blue" colorFrench="bleu"  name="mobile"  /></li>
                            <li><SingleAccentSelector color="green" colorFrench="vert"  name="mobile" /></li>
                            <li><SingleAccentSelector color="purple" colorFrench="violet"  name="mobile" /></li>
                            <li><SingleAccentSelector color="orange" colorFrench="orangge"  name="mobile" /></li>
                            <li><SingleAccentSelector color="cyan" colorFrench="cyan"  name="mobile" /></li>
                            <li><SingleAccentSelector color="pink" colorFrench="rose"  name="mobile" /></li>
                        </ul>
                    </div>
                    {/* Flag Selector */}
                <button onClick={toggleLanguage} className="w-7 h-7 cursor-pointer hover:scale-105 transition-all duration-100">
                    {language ? <img src={france} alt="french flag" />  : <img src={usa} alt="usa flag" /> }
                </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
