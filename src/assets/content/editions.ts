import wecompI from "../images/editionsLogo/wecomp2017.svg";
import wecompII from "../images/editionsLogo/wecomp2018.svg";
import wecompIII from "../images/editionsLogo/wecomp2019.svg";
import wecompIV from "../images/editionsLogo/wecomp2023.svg";
import wecompV from "../images/editionsLogo/wecomp2024.svg";
import wecompVI from "../images/editionsLogo/wecomp2025.svg";

import { EditionProps } from "../../components/sections/Editions/types";

export const editionsContent: EditionProps[] = [
  {
    logoPath: wecompVI,
    altText: "Logo da VI Wecomp",
    edition: "Wecomp 2025",
    website: "https://wecomp-vi.vercel.app",
  },
  {
    logoPath: wecompV,
    altText: "Logo da V Wecomp",
    edition: "Wecomp 2024",
    website: "https://wecomp-2024.vercel.app",
  },
  {
    logoPath: wecompIV,
    altText: "Logo da IV Wecomp",
    edition: "Wecomp 2023",
    website: "https://wecomp2023.vercel.app",
  },
  {
    logoPath: wecompIII,
    altText: "Logo da III Wecomp",
    edition: "Wecomp 2019",
    website: "https://wecomp2019.vercel.app",
  },
  {
    logoPath: wecompII,
    altText: "Logo da II Wecomp",
    edition: "Wecomp 2018",
    website:
      "https://www.facebook.com/media/set/?vanity=wecompifsp&set=a.796818979168405",
  },
  {
    logoPath: wecompI,
    altText: "Logo da I Wecomp",
    edition: "Wecomp 2017",
    website:
      "https://www.facebook.com/media/set/?vanity=wecompifsp&set=a.796919305825039",
  },
];

export default editionsContent;
