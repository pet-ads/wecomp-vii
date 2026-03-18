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
  eventLocationAndDate,
  // status,
  // classification,
  // image,
  // imageDescription,
}: CardHeaderProps) {
  return (
    <Container>
      <InformationContainer>
        <EventDetails>{eventLocationAndDate}</EventDetails>
        {/* <TagContainer>
          <DifficultyTag label={classification} />
          <AvailabilityTag label={status} />
        </TagContainer> */}
      </InformationContainer>
      {/* <EventImage src={image} alt={imageDescription} draggable={false} /> */}
    </Container>
  );
}
