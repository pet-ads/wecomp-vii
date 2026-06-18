import scenario from "../images/organizationLogo/ScenarioLogo.svg";
import leGaban from "../images/organizationLogo/LeGabanLogo.svg";
import stepWise from "../images/organizationLogo/StepWiseLogo.svg";
import onovolab from "../images/organizationLogo/onovolab.svg";
import salespace from "../images/organizationLogo/SalespaceLogo.svg";
// import marlabs from "../images/organizationLogo/MarlabsLogo.svg";

interface SponsorProps {
  name: string;
  logoPath: string;
  link: string;
  width: string;
}

export const sponsorsContent: SponsorProps[] = [
  {
    name: "SCENARIO AUTOMATION",
    logoPath: scenario,
    link: "https://www.scenarioautomation.com/",
    width: "9rem",
  },
  {
    name: "STEPWISE",
    logoPath: stepWise,
    link: "https://stepwise.com.br/",
    width: "8rem",
  },
  {
    name: "ONOVOLAB",
    logoPath: onovolab,
    link: "https://onovolab.com",
    width: "9rem",
  },
  {
    name: "LE GABAN",
    logoPath: leGaban,
    link: "https://legaban.com.br/",
    width: "8rem",
  },
  {
    name: "SALESPACE",
    logoPath: salespace,
    link: "https://salespace.com.br/",
    width: "9rem",
  }
];

export default sponsorsContent;
