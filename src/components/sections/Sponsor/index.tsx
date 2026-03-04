import sponsorsContent from "../../../assets/content/sponsors";
import { Section } from "../../commons/structure/Section";
import SoonCard from "../../commons/toolkit/SoonCard";
import Carousel from "../../commons/toolkit/Carousel";

import { Container } from "./styles";

const soonOrNot = true;


export default function SupportersCarousel() {
  return (
    <Section
      title="Apoiadores"
      currentSectionId="Sponsors"
      nextSectionId="Organization"
    >
      <Container>
        {soonOrNot ? (
                  <SoonCard />
                ) : (
        <Carousel items={sponsorsContent} visibleItems={5} />
        )}
      </Container>

    </Section>
  );
}
