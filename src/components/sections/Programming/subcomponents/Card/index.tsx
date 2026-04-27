import CardHeader from "../CardHeader";
import CardMain from "../CardMain";
import CardFooter from "../CardFooter";

import useToggleCardContent from "../../../../../hooks/toggle/useToggleCardContent";

import { Container, EventTitle, Icon, IconContainer } from "./styles";

import { generatedIconEvent } from "../../../../../utils/generatedIconEvent";

import { ProgrammingProps } from "../../types";

export default function Card({
  name,
  image,
  imageDescription,
  bio,
  author,
  link,
  vacancies,
  location,
  status,
  classification,
  description,
  typeEvent,
}: ProgrammingProps) {
  const { labelButton, cardText, handleChangeCardText } = useToggleCardContent(
    description,
    bio,
    "Ver biografia"
  );
  const eventIconProps = generatedIconEvent(typeEvent);

  return (
    <Container key={name}>
      <IconContainer>
        <Icon
          src={eventIconProps.iconPath}
          alt={`Icone evento ${eventIconProps.label}`}
          draggable={false}
        />
        <EventTitle>{name}</EventTitle>
      </IconContainer>
      <CardHeader
        author={author}
        eventLocationAndAuthor={[location, author]
          .filter(Boolean)
          .join(" | ")}
      />
      <CardMain 
      content={cardText} 
      status={status}
      classification={classification}
      image={image}
      imageDescription={imageDescription}
      />
      <CardFooter
        vacancies={vacancies}
        link={link}
        status={status}
        labelButton={labelButton}
        handleChangeCardText={handleChangeCardText}
        typeEvent={typeEvent}
      />
    </Container>
  );
}
