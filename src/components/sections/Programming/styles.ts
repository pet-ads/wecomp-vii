import styled, { css } from "styled-components";
import { mq } from "../../../utils/responsive/breakpoints";

const responsiveWidth = css`

  width: 100%;
  box-sizing: border-box;

  ${mq({
    width: ["380px", "320px", "320px", "320px", "380px"],
  })}
  max-width: 380px;
`;

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

  &:active:not(:disabled) {
    transform: scale(0.98);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
`;

export const DaysTabs = styled.nav`
  display: flex;
  background: #fff;
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin: 1.25rem 0 3rem;
  width: 100%;
  max-width: 1100px;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;
  min-height: 65px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.6rem;
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
  gap: 2.5rem;
  width: 100%;
  max-width: 1100px;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TimeTabs = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 200px;
  justify-content: center;
  
  @media (max-width: 900px) {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 0.6rem;
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
`;

export const EventsList = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1.5rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  ${responsiveWidth}

  span {
    font-weight: bold;
    font-size: 0.9rem;
    color: #666;
    min-width: 65px;
    text-align: center;
  }

  button {
    ${BaseButton}
    background: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    width: 36px;
    height: 36px;

    &:hover:not(:disabled) {
      background: #f5f5f5;
    }
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  z-index: 5;
  margin: 2rem 0;
  ${responsiveWidth}
`;

export const DropdownHeader = styled.div`
  background-color: #fff;
  padding: 1rem 3rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 400px) {
    font-size: 0.95rem;
    padding: 0.8rem 2.5rem;
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  max-height: 250px;

  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }
`;

export const DropdownItem = styled.div<{ $active: boolean }>`
  padding: 0.9rem 1rem;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  background-color: ${props => props.$active ? "#000" : "#fff"};
  color: ${props => props.$active ? "#fff" : "#000"};

  &:hover {
    background-color: ${props => props.$active ? "#000" : "#f9f9f9"};
  }
`;

export const IconArrow = styled.span<{ $isOpen: boolean }>`
  border: solid #000;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: ${props => props.$isOpen ? "rotate(-135deg)" : "rotate(45deg)"};
  transition: transform 0.2s ease;
  position: absolute;
  right: 1.2rem;
`;

export const DayDivider = styled.div`
  background: #f8f9fa;
  padding: 6px 0;
  font-size: 0.7rem;
  font-weight: 800;
  text-align: center;
  color: #adb5bd;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 2;
`;