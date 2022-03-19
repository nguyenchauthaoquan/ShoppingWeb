// import logo from './logo.svg';
import './App.css';
import Accordion from "./components/widgets/Accordion/Accordion";
import AccordionHeader from "./components/widgets/Accordion/AccordionHeader";
import AccordionItem from "./components/widgets/Accordion/AccordionItem";
import AccordionBody from "./components/widgets/Accordion/AccordionBody";

function App() {
  return (
    <Accordion id={"accordionExample"}>
      <AccordionItem>
          <AccordionHeader id={"heading1"} targetId={"collapse1"}>
              Heading 1
          </AccordionHeader>
          <AccordionBody id={"collapse1"} targetId={"accordionExample"} targetLabel={"heading1"}>
              Accordion 1
          </AccordionBody>
      </AccordionItem>
        <AccordionItem>
            <AccordionHeader id={"heading2"} targetId={"collapse2"} collapsed>
                Heading 2
            </AccordionHeader>
            <AccordionBody id={"collapse2"} targetId={"accordionExample"} targetLabel={"heading2"}>
                Accordion 2
            </AccordionBody>
        </AccordionItem>
    </Accordion>
  );
}

export default App;
