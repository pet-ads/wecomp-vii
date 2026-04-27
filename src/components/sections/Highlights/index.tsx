//import { Section } from "../../commons/structure/Section";
import { Container } from "./styles";
// import SoonCard from "../../commons/toolkit/SoonCard";
import Slider from "../../commons/toolkit/Slider";
import highlightContent from "../../../assets/content/highlights";

import useIsMobile from "../../../hooks/window/Mobile";
import useIsMobileHeight from "../../../hooks/window/MobileHeight";

import CardProjeto from "./subcomponents/Modal";
import Card from "./subcomponents/Card";

export default function Highlights() {
  const isMobile = useIsMobile();
  const isMobileHeight = useIsMobileHeight();
   const shouldUseMobileLayout = isMobile || isMobileHeight;

  return (
    // <Section
    //   title="Destaques"
    //   currentSectionId="Highlights"
    //   nextSectionId="Locations"
    // >
       <Container>
        <Slider
          items={highlightContent}
          renderItem={(event) =>
            shouldUseMobileLayout ? (
              <CardProjeto key={event.title} {...event} />
            ) : ( 
              <Card key={event.title} {...event} />
            )
          }
        />
        
      </Container>
    // </Section>
  );
}
