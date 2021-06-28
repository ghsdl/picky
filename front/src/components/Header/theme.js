import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f0f0f0;",
  background: "#fff",
  fontColor: "#000",
  border: "3px solid #333",
};

export const darkTheme = {
  body: "#000",
  background: "#333",
  fontColor: "#fff",
  border: "3px solid #FFF",
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

  .search-button, .button-precedent, .button-suivant, .pickMoodContent-item, .button-newResearch {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
  }

  div.makeStyles-paper-5 {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
  }

  .signUp__title, .formUser-login, .redirect {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.fontColor};
    border: ${(props) => props.theme.border};
  }
`;
