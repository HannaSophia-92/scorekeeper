import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Lexend Peta', sans-serif; 
    font-size: 1rem;
    color: lightgray;
    background-color: black;
 }
  
 input {
   padding-left: 2px;
 }

  h2 {
    font-size: 1.2rem;
    margin: 10px 0;
  }
`;
