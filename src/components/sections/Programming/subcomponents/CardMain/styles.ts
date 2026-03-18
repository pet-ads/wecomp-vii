import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 100%;
  max-width: 100%;
  flex: 1;

  min-height: 100%;
  max-height: 100%;

  display: flex;
  justify-content: center;
  max-width: 100%;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  text-align: justify;

  @media (max-height: 750px) and (min-width: 600px) and (min-height: 769px) {
    width: 100%;
    min-height: 2rem;
    max-height: 2rem;
  }

  @media (max-height: 684px) {
    width: 100%;
    min-height: 2.6rem;
    max-height: 2.6rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-height: 6rem;
    max-height: 6rem;
  }
`;

export const EventDetails = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem; 
  
  max-height: 6rem; 

  overflow-y: auto; 
  padding-right: 8px; 

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #76b39d;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-height: none;
  }
`;

export const EventImage = styled.img`
  width: 10%;
  object-fit: cover; 
  border-radius: 0.5rem; 
  align-self: center;
  
  @media (max-width: 768px) {
    width: 10%;
    height: 10%;
    
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.5rem; 
  align-items: flex-start; 
`;

export const ImageAndTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`;
