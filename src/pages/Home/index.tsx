import {
  Header,
  HeroBanner,
  About,
  Sponsors,
  Organization,
  Programming,
  //Highlights,
  Locations,
  Contact,
  Editions,
  FAQs,
} from "../../dto";

import { Main } from "./styles";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Main>
        <About />
        <Sponsors />
        <Organization />
        <Programming />
        {/* <Highlights /> */}
        <Locations />
        <Contact />
        <Editions />
        <FAQs />
      </Main>
    </>
  );
}
