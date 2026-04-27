export type Sections =
  | "Hero"
  | "About"
  | "Sponsors"
  | "Organization"
  | "Programming"
  //| "Highlights"
  | "Locations"
  | "Contact"
  | "Editions"
  | "FAQ";

export interface ArrowScrool {
  sectionId: Sections;
}
