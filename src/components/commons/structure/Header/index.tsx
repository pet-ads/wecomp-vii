import MenuNavigation from "./subcomponents/Navigation";
import MenuMobile from "./subcomponents/Mobile";

import { LinkAnchor } from "./subcomponents/types";

import { Nav } from "./styles";

export default function Header() {
  const links: LinkAnchor[] = [
    { text: "Início", sectionId: "Hero" },
    { text: "Sobre", sectionId: "About" },
    { text: "Apoiadores", sectionId: "Sponsors" },
    { text: "Realização", sectionId: "Organization" },
    { text: "Programação", sectionId: "Programming" },
    // { text: "Destaques", sectionId: "Highlights" },
    { text: "Locais", sectionId: "Locations" },
    { text: "Contato", sectionId: "Contact" },
    { text: "Edições", sectionId: "Editions" },
    // { text: "FAQ", sectionId: "FAQ" },
  ];

  return (
    <Nav>
      <MenuNavigation links={links} />
      <MenuMobile links={links} />
    </Nav>
  );
}
