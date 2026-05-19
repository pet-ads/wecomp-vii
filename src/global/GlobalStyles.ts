import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white-100: #FFFFFF;
    --gray-200: #F4F3EF;
    --gray-1000: #000000;
    --green-500: #2e7594;
    --green-700: #63a1bc;
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

  @media (max-width: 768px) {
    [vw], .enabled, [vw-access-button], [vw-plugin-wrapper] {
      display: none !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }

`;

export default GlobalStyles;
