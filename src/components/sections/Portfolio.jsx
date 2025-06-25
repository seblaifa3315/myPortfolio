import { useData } from "../../context/DataContext";
import SectionContainer from "../smallComponents/SectionContainer";

const Portfolio = () => {
 return (
    <SectionContainer bg="bg-green-500" >
        <div id="portfolio" className="scroll-mt-[394px] text-textColor">
            <h1 className="">Portfolio Section</h1>
        </div>
    </SectionContainer>
  )
}

export default Portfolio