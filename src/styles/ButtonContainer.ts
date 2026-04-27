import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  min-width: 7rem;
  max-width: 7rem;

  min-height: 2rem;
  max-height: 2rem;

  padding: 0.5rem 1rem;

  background-color: var(--green-700);
  color: var(--white-100);

  border: none;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  transition: opacity 0.3s ease-in-out;
  white-space: nowrap;

  cursor: pointer;

  &:hover {
    opacity: 85%;
  }

  &:focus {
    outline: 3px solid var(--focus-outline-color);
    outline-offset: 2px;
  }

  @media (max-width: 380px) {
    min-width: 6rem;
    max-width: 6rem;

    min-height: 2rem;
    max-height: 2rem;

    font-size: 0.75rem;

    white-space: nowrap;
  }
`;

export default ButtonContainer;
