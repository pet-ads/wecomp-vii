import { useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useToggleCardContent from "../../../../../hooks/toggle/useToggleCardContent";
import RedirectButton from "../../../../commons/toolkit/RedirectButton";
import AvailabilityTag from "../../../../commons/toolkit/tags/AvailabilityTag";
import DifficultyTag from "../../../../commons/toolkit/tags/DifficultyTag";

import {
  Container,
  ContainerVacancies,
  TagGroup,
  VagasWrapper,
  EventImage,
  ContainerMain,
  EventDetails,
  EventTitle,
  TagContainer,
  Icon,
  IconContainer,
  ContainerHead,
  ContainerTitle,
  ContainerFooter,
  ContainerButtons,
  EventDescriptionButton,
  PaginationWrapper,
} from "./styles";

import { generatedIconEvent } from "../../../../../utils/generatedIconEvent";
import { ProgrammingProps } from "../../types";
import LabeledValue from "../../../../commons/toolkit/LabeledValue";

interface Props extends ProgrammingProps {
  pagination?: {
    current: number;
    total: number;
    onNext: () => void;
    onPrev: () => void;
  };
}

export default function CardProjeto({
  classification,
  description,
  bio,
  name,
  author,
  image,
  imageDescription,
  vacancies,
  status,
  typeEvent,
  location,
  link,
  pagination,
}: Props) {
  const eventIconProps = generatedIconEvent(typeEvent);

  const { labelButton, cardText, handleChangeCardText } = useToggleCardContent(
    description,
    bio,
    "Ver biografia"
  );

  const isShowSubscriveButton = useMemo(() => {
    if (!link) return false;
    const blockedStatus = ["closed", "esgotado", "encerrado"];
    const currentStatus = status?.toLowerCase().trim();
    return !blockedStatus.includes(currentStatus);
  }, [link, status]);

  const eventsDisablingActionButton = ["TechnicalVisit", "Opening"];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Container>
        <ContainerHead>
          <ContainerTitle>
            <IconContainer>
              <Icon
                src={eventIconProps.iconPath}
                alt={`Icone evento ${eventIconProps.label}`}
              />
            </IconContainer>
            <EventTitle isOpen={false}>{name}</EventTitle>
          </ContainerTitle>

          <EventDetails isOpen={false}>
            {[location, author].filter(Boolean).join(" | ")}
          </EventDetails>
        </ContainerHead>

        <ContainerVacancies>
          <EventImage 
            src={image} 
            alt={imageDescription} 
            draggable={false}
          />
          <TagContainer isOpen={false}>
            <TagGroup>
              <AvailabilityTag label={status} />
              <DifficultyTag label={classification} />
            </TagGroup>
            <VagasWrapper>
              <LabeledValue label="Vagas" value={vacancies} />
            </VagasWrapper>
          </TagContainer>
        </ContainerVacancies>

        <ContainerMain>
          {cardText}
        </ContainerMain>

        <ContainerFooter>
          <ContainerButtons>
            {bio?.trim() && !eventsDisablingActionButton.includes(typeEvent) && (
              <EventDescriptionButton onClick={handleChangeCardText}>
                {labelButton}
              </EventDescriptionButton>
            )}
            
            {isShowSubscriveButton && (
              <RedirectButton link={link}>Inscrever-se</RedirectButton>
            )}
          </ContainerButtons>
        </ContainerFooter>
      </Container>

      {pagination && pagination.total > 1 && (
        <PaginationWrapper>
          <button 
            type="button"
            disabled={pagination.current === 1} 
            onClick={pagination.onPrev}
          >
            <FaChevronLeft size={14} />
          </button>
          
          <span>
            {pagination.current} de {pagination.total}
          </span>
          
          <button 
            type="button"
            disabled={pagination.current === pagination.total} 
            onClick={pagination.onNext}
          >
            <FaChevronRight size={14} />
          </button>
        </PaginationWrapper>
      )}
    </div>
  );
}