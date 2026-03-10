import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 100%;
  max-width: 100%;

  height: 2vh;

  padding: 1rem 0;

  background-color: var(--green-500);
`;

export const FooterContent = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  gap: 0.5rem;

  text-align: center;

  font-size: 10pt;
  font-weight: bold;

  color: #ffff;

  @media (max-width: 400px) {
    font-size: 8pt;
  }
`;
