//import AvailabilityTag from "../../../../commons/toolkit/tags/AvailabilityTag";
//import DifficultyTag from "../../../../commons/toolkit/tags/DifficultyTag";

import { CardHeaderProps } from "./types";

import {
  Container,
  // EventImage,
  InformationContainer,
  EventDetails,
  // TagContainer,
} from "./styles";

export default function CardHeader({
  eventLocationAndAuthor,
  // status,
  // classification,
  // image,
  // imageDescription,
}: CardHeaderProps) {
  return (
    <Container>
      <InformationContainer>
        <EventDetails>{eventLocationAndAuthor}</EventDetails>
      </InformationContainer>
    </Container>
  );
}
