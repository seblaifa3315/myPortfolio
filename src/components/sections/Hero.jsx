import SectionContainer from "../smallComponents/SectionContainer";
import avatar from "../../assets/portrait_test.png";
import IconGithub from "../svgs/IconGithub";
import IconInstagram from "../svgs/IconInstagram";
import IconTwitter from "../svgs/IconTwitter";
import IconLinkedIn from "../svgs/IconLinkedIn";
import TypedText from "../smallComponents/TypedText";
import { motion } from "framer-motion";
import { useData } from "../../context/DataContext";
import { useLanguage } from "../../context/LanguageContext";

const iconBase = "w-8 h-8 text-primary inline-flex p-1 border-2 border-primary rounded-full hover:bg-primary hover:text-textColor hover:shadow-[0_0_18px_var(--primary)] transition-all duration-300";

const Hero = () => {
    const { data, loading } = useData();
    const {language, setLanguage} = useLanguage();

    if (loading) return <div className="text-center py-10">Loading...</div>;

    return (
        <SectionContainer bg="bg-background" gap="gap-6">
            <div id="home" className="scroll-mt-[250px] flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10">
                {/* Left Section: Text */}
                <motion.div
                    className="flex-1 text-center lg:text-left max-w-2xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0 }}
                >
                        <h1 className="text-4xl sm:text-5xl lg:text-[55px] font-bold">
                            {language ? data.heroGreeting : data.heroGreetingFrench} <span className="text-primaryGradient">{language ? data.firstName : data.firstNameFrench}</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl lg:text-[32px] mt-4 font-bold">
                            {language ? data.heroStart : data.heroStartFrench}{" "}
                            <span className="text-primary">
                                <TypedText />
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg mt-4 mb-6 px-4 lg:px-0">{language ? data.heroIntroduction : data.heroIntroductionFrench}</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
                            <a href="#contact">
                                <button className="inline-block py-2 md:py-3 px-auto w-[150px] bg-transparent text-primary border-2 border-primary hover:bg-primary rounded-full hover:shadow-[0_0_18px_var(--primary)] font-bold hover:text-textColor shadow-none transition-all duration-200 whitespace-nowrap cursor-pointer">{language ? "Contact Me" : "Me contacter"}</button>
                            </a>
                            <a href="#cv">
                                <button className="inline-block py-2 md:py-3 px-auto w-[150px] border-2 border-primary bg-primary rounded-full shadow-[0_0_18px_var(--primary)] font-bold text-background hover:bg-transparent hover:text-primary hover:shadow-none transition-all duration-300 whitespace-nowrap cursor-pointer">{language ? "Download CV" :"Téléchargez CV"}</button>
                            </a>
                            <ul className="flex items-center justify-center sm:justify-start gap-4" aria-label="Social Links">
                                <li>
                                    <a href="#">
                                        <IconGithub className={iconBase} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconInstagram className={iconBase} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconTwitter className={iconBase} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconLinkedIn className={iconBase} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                </motion.div>

                {/* Right Section: Avatar */}
                <motion.div
                    className="flex-1 flex items-center justify-center  "
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut"}}
                    viewport={{ once: true, amount: 0 }}>
                        <div className="relative w-[55vw] sm:w-[50vw] md:w-[40vw] lg:w-[32vw] aspect-square rounded-full p-[5px] comet-ring-double overflow-hidden">
                            <div className="relative w-full h-full bg-background rounded-full flex items-center justify-center z-10 overflow-hidden">
                                <img src={avatar} alt="profile" className="absolute top-8 object-cover w-[90%] h-[90%] rounded-full" />
                            </div>
                        </div>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default Hero;
