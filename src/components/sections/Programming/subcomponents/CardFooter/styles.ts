import styled from "styled-components";

import ButtonContainer from "../../../../../styles/ButtonContainer";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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

  span {
    font-size: 0.85rem;
    font-weight: 700;
    color: #444;
    min-width: 45px;
    text-align: center;
  }

  button {
    background: transparent;
    border: 1px solid #76b39d;
    color: #76b39d;
    border-radius: 6px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      background: #76b39d;
      color: white;
    }

    &:disabled {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }
`;