import styled from "styled-components";

import ButtonContainer from "../../../../../styles/ButtonContainer";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;

  min-width: 100%;
  max-width: 100%;

`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const EventDescriptionButton = styled(ButtonContainer)<ButtonProps>``;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  user-select: none;
`;