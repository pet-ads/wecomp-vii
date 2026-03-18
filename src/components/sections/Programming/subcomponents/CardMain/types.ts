import {
  AvailabilityStatus,
  DifficultyEvent,
} from "../../../../commons/toolkit/tags/types";

export interface CardMainProps {
  content: string;
  status: AvailabilityStatus;
  classification: DifficultyEvent;
  image: string;
  imageDescription: string;
}
