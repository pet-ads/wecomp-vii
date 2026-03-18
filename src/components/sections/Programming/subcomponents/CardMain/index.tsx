import AvailabilityTag from "../../../../commons/toolkit/tags/AvailabilityTag";
import DifficultyTag from "../../../../commons/toolkit/tags/DifficultyTag";

import {CardMainProps} from "./types";

import { 
  Container,
  EventImage,
  EventDetails,
  TagContainer,
  ImageAndTags,
} from "./styles";


export default function CardMain({
  content,
  status,
  classification,
  image,
  imageDescription,
}: CardMainProps) {
  return <Container>
    <ImageAndTags>
      <EventImage src={image} alt={imageDescription} draggable={false} />
      <TagContainer>
        <DifficultyTag label={classification} />
        <AvailabilityTag label={status} />
      </TagContainer>
      <EventDetails>
        {content}
      </EventDetails>
    </ImageAndTags>
  </Container>;
}
