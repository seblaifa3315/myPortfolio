import { useData } from "../../context/DataContext";
import SectionContainer from "../smallComponents/SectionContainer";

const About = () => {
 return (
    <SectionContainer bg="bg-blue-500" >
        <div id="about" className="scroll-mt-[394px] text-textColor">
            <h1 className="">About Section</h1>
        </div>
    </SectionContainer>
  )
}

export default About