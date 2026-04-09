import ifsp from "../images/organizationLogo/ifspLogo.png";
import ifspVertical from "../images/organizationLogo/ifspVertical.png";
import pet from "../images/organizationLogo/petLogo.svg";

type OrganizerTypes = "Director" | "Organizer";

interface OrganizationProps {
  name: string;
  logoPath: string;
  mobileLogoPath?: string; 
  link: string;
  width?: string;
  height?: string;
  type: OrganizerTypes;
}

export const organizationContent: OrganizationProps[] = [
  {
    name: "IFSP",
    logoPath: ifsp, 
    mobileLogoPath: ifspVertical, 
    link: "https://scl.ifsp.edu.br",
    width: "5rem",
    type: "Director",
  },
  {
    name: "PET ADS",
    logoPath: pet,
    link: "https://petads-ifsp-scl.vercel.app",
    width: "8rem",
    type: "Organizer",
  }
];

const organizers = organizationContent.reduce<{
  realizators: OrganizationProps[];
  organizers: OrganizationProps[];
}>(
  (acc, org) => {
    if (org.type === "Organizer") {
      acc.organizers.push(org);
    } else {
      acc.realizators.push(org);
    }
    return acc;
  },
  { realizators: [], organizers: [] }
);

export default organizers;