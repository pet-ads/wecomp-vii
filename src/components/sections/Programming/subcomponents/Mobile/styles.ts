import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import ButtonContainer from "../../../../../styles/ButtonContainer";
import { AiOutlinePlus } from "react-icons/ai";
import { mq } from "../../../../../utils/responsive/breakpoints";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--white-100);
  border-radius: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  
  padding: 1.5rem;
  justify-content: space-between;
  gap: 1rem;
  box-sizing: border-box;
  
  max-width: 380px;
`;

export const ContainerHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;

export const EventTitle = styled.div<{ isOpen: boolean }>`
  font-weight: bold;
  text-align: start;
  color: #000;
  line-height: 1.2;
  font-size: 0.95rem;
`;

export const EventDetails = styled.div<{ isOpen: boolean }>`
  font-weight: 600;
  color: #000;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

export const EventSpeakers = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--gray-1000);
  margin-top: 0.2rem;
`;

export const ContainerVacancies = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 0.5rem;
`;

export const TagGroup = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: nowrap;
`;

export const VagasWrapper = styled.footer`
  display: flex;
  align-items: center;
  gap: 4px;
  
  & > div {
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }
`;

export const EventImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
`;

export const TagContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;

`;

export const ContainerMain = styled.div`
  width: 100%;
  text-align: justify;
  font-size: 0.85rem;
  line-height: 1.4;
  color: #000;
  margin-top: 0.5rem;

  flex: 1;
  max-height: 180px; 
  overflow-y: auto;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #7297a7;
    border-radius: 10px;
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-top: auto;
  padding-top: 1rem;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-between;

  & > button, & > a {
    font-size: 0.75rem;
    padding: 0.4rem 0.5rem;
    font-size: 0.75rem;     
    min-height: 32px;
  }
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const EventDescriptionButton = styled(ButtonContainer)<ButtonProps>`
  color: white;
  border: none;
  font-weight: bold;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PlusIcon = styled(AiOutlinePlus)`
  display: none;
`;

export const AbertoContainer = styled.div`
  display: none;
`;

export const ContainerBottom = styled.div`
  display: contents;
`;

export const ContainerMainModal = styled.div`
  display: contents;
`;

export const TextSobre = styled.h3`
  display: none;
`;

export const ContainerImagem = styled.div`
  display: contents;
`;

export const CloseButton = styled(AiFillCloseCircle)`
  display: none;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  user-select: none;
  margin: 1rem auto 0;

  ${mq({
    width: ["95%", "90%", "320px", "350px", "380px"]
  })}

  span {
    font-size: 0.85rem;
    font-weight: 700;
    color: #444;
    min-width: 45px;
    text-align: center;
  }

  button {
    background: transparent;
    border: 1px solid #7297a7;
    color: #7297a7;
    border-radius: 6px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      background: #7297a7;
      color: white;
    }

    &:disabled {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }
`;

