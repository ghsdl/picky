import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f0f0f0;",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	html {
    background-color: ${(props) => props.theme.body};
  }

  body {
    background-color: ${(props) => props.theme.body};
  }

  div {
    color: ${(props) => props.theme.fontColor};
  }

`;
