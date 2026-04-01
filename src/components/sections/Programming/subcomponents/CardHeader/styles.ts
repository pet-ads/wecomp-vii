import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 65%;
  min-width: 65%;
  min-height: 100%;
  max-height: 100%;
  text-align: justify;
  
  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

export const EventDetails = styled.div`
  font-size: 1rem;
  font-weight: 600;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EventSpeakers = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-1000);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

