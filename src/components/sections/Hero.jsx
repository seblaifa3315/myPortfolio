import { useData } from "../../context/DataContext";
import SectionContainer from "../smallComponents/SectionContainer";

const Hero = () => {
    return (
        <SectionContainer bg="bg-background" mt="-mt-20">
            <div className="text-textColor pt-20">
                <h1 className="">Hero Section</h1>
            </div>
        </SectionContainer>
    );
};

export default Hero;
