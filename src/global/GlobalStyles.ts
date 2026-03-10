import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white-100: #FFFFFF;
    --gray-200: #F4F3EF;
    --gray-1000: #1a583d;
    --green-500: #1a583d;
    --green-700: #78b595;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    background-color: var(--gray-200);
    color: var(--gray-1000);
    font-family: 'Montserrat';
  }

  // div[vw].enabled {
  //   left: 1rem !important;
  //   bottom: 1rem !important;
  //   right: auto !important;
  //   top: auto !important;
  //   transform: none !important;
  // }

  // div[vw].enabled [vw-access-button] {
  //   position: fixed !important;
  //   left: 1.25rem !important;
  //   bottom: 0.75rem !important;
  //   transform: scale(0.9) !important;
  //   transform-origin: bottom left !important;
  // }

`;

export default GlobalStyles;
