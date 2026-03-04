import wecomp from "../images/wecompLogo.svg";

interface HeroProps {
  logoPath: string;
  logoAlternativeText: string;
  eventEdition: string;
  eventDate: string;
}

export const heroContent: HeroProps = {
  eventEdition: "VII Semana da Computação",
  eventDate: "",
  logoPath: wecomp,
  logoAlternativeText: "Logo do evento da Semana da Computação WECOMP",
};

export default heroContent;
