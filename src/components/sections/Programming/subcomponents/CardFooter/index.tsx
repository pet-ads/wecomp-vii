import { useEffect, useState } from "react";

import RedirectButton from "../../../../commons/toolkit/RedirectButton";
import LabeledValue from "../../../../commons/toolkit/LabeledValue";

import { CardFooterProps } from "./types";

import { 
  Container, 
  ContainerButtons, 
  EventDescriptionButton, 
} from "./styles";

export default function CardFooter({
  vacancies,
  link,
  labelButton,
  typeEvent,
  status,
  handleChangeCardText,
}: CardFooterProps) {
  const eventsDisablingActionButton = ["TechnicalVisit", "Opening"];

  const cutoffDate = new Date("2025-09-15T00:01:00");
  const [isAfterCutoff, setIsAfterCutoff] = useState(new Date() >= cutoffDate);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now >= cutoffDate) {
        setIsAfterCutoff(true);
        clearInterval(interval);
      }
    }, 1000 * 30);

    return () => clearInterval(interval);
  });

  const isShowSubscriveButton = isAfterCutoff && link && status != "Closed";

  return (
    <Container>
      <LabeledValue label="Vagas" value={vacancies} />

      <ContainerButtons>
        {eventsDisablingActionButton.includes(typeEvent) ? null : (
          <EventDescriptionButton onClick={handleChangeCardText}>
            {labelButton}
          </EventDescriptionButton>
        )}
        {isShowSubscriveButton && (
          <RedirectButton link={link}>Inscrever-se</RedirectButton>
        )}
      </ContainerButtons>
    </Container>
  );
}
