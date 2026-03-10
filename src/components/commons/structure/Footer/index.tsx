import { FaHeart } from "react-icons/fa";

import RedirectSpan from "../../toolkit/RedirectSpan";

import { FooterContainer, FooterContent } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        Desenvolvido com
        <FaHeart color="#c12329" />
        <RedirectSpan
          link="http://petads.paginas.scl.ifsp.edu.br/#/"
          children="PET/ADS"
        />
        por
        <RedirectSpan
          link="https://portais.ifsp.edu.br/scl/"
          children="IFSP/SCL"
        />
      </FooterContent>
    </FooterContainer>
  );
}
