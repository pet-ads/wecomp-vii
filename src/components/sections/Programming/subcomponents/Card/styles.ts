import styled from "styled-components";
import { mq } from "../../../../../utils/responsive/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: var(--white-100);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  overflow: hidden; 
  width: 100%;
  max-width: 100%;
  min-width: 31rem;

  position: relative;
  height: 100%; 
  min-height: 18rem;
  max-height: 18rem;

  @media (max-width: 900px) {
    height: auto;
    min-height: auto;
    max-height: none;
    min-width: 100%;
  }

  @media (max-height: 684px) {
    max-width: 32rem;
    min-width: 32rem;
    height: 22rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start; 
  gap: 0.5rem; 

`;

export const Icon = styled.img`
`;

export const EventTitle = styled.div`
  max-width: 100%;

  height: auto;

  font-size: 1.15rem;
  font-weight: bold;

  hyphens: auto;
  overflow-wrap: break-word;
  word-break: break-word;

   ${mq({
          fontSize: ["0.7rem", "0.7rem", "0.8rem", "0.8rem", "0.9rem", "1rem", "1.15rem"],
                      
        })}
`;
