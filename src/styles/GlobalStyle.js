import { createGlobalStyle } from "styled-components";
import "../config/font.css"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    color: white;
    background-color: #111;
    font-family: 'Roboto', sans-serif;
  }

`;

export default GlobalStyle;
