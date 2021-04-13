import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: linear-gradient(to right, #596AEB, #65EB87) no-repeat;
}

body, input, button {
  font-family: 'Roboto', sans-serif;
}

button {
  cursor: pointer;  
}

.Container {
  display: flex;
  align-items: center;
  place-content: center;
  height: 100vh;
  width: 100%;
}

`;
