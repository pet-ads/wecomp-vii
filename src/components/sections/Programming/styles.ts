import styled, { css } from "styled-components";

const BaseButton = css`
  border: none;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  font-size: 1rem;
  user-select: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const DaysTabs = styled.nav` // Mudado para 'nav' por semântica
  display: flex;
  background: #fff;
  padding: 8px 12px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin: 20px 0 50px;
  width: 100%;
  max-width: 1100px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  min-height: 65px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
  }
`;

export const TabButton = styled.button<{ $active: boolean }>`
  ${BaseButton}
  height: 50px;
  flex: 2;
  max-width: 200px;
  background: ${({ $active }) => ($active ? "#000" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? "#000" : "#f0f0f0")};
  }

  @media (max-width: 768px) {
    height: 40px;
    min-width: 100px;
    font-size: 0.85rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TimeTabs = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 260px;
  margin-left: 10px;
  justify-content: center;
  
  @media (max-width: 900px) {
    width: 100%;
    flex-direction: row;
    overflow-x: auto; // Scroll horizontal no mobile se houver muitos horários
    padding-bottom: 10px;
  }
`;

export const TimeButton = styled.button<{ $active: boolean }>`
  ${BaseButton}
  height: 50px;
  width: 100%;
  background: ${({ $active }) => ($active ? "#000" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};
  box-shadow: ${({ $active }) => ($active ? "none" : "0 4px 10px rgba(0, 0, 0, 0.08)")};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    background: ${({ $active }) => ($active ? "#000" : "#f9f9f9")};
  }

  @media (max-width: 900px) {
    min-width: 120px;
  }
`;

export const EventsList = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  margin-bottom: 10px;
  width: 100%;

  span {
    font-weight: bold;
    font-size: 0.9rem;
    color: #666;
  }

  button {
    ${BaseButton} // Reutilizando os estilos base
    background: #76b39d;
    color: white;
    padding: 8px 15px;
    font-size: 0.8rem;
    gap: 5px;

    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }
  }
`;