import { faBlackTie } from "@fortawesome/free-brands-svg-icons";
import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f0f0f0;",
  background: "#fff",
  fontColor: "#000",
  border: "3px solid #333",
  borderprofile: "3px solid #F4BB01",
  bordersignin: "3px solid #FFF",
  yellow: "#CE4257",
  red: "#F4BB01",
};

export const darkTheme = {
  body: "#2D2525",
  background: "#333",
  fontColor: "#fff",
  border: "3px solid #FFF",
  borderprofile: "3px solid #CE4257",
  bordersignin: "3px solid #F4BB01",
  yellow: "#F4BB01",
  red: "#CE4257",
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

  div.makeStyles-paper-2, div.makeStyles-paper-5 {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
  }

  .signUp__title, .formUser-login, .redirect {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.fontColor};
    border: ${(props) => props.theme.border};
  }

  .gate__pseudo+label:before,   .gate__pseudo+label:after, .gate__pseudoSignUp+label:before, .gate__pseudoSignUp+label:after {
    background-color: ${(props) => props.theme.red};
  }

  .gate__email+label:before,   .gate__email+label:after, .gate__emailSignUp+label:before, .gate__emailSignUp+label:after  {
    background-color: ${(props) => props.theme.red};
  }

  .gate__password+label:before,   .gate__password+label:after, .gate__passwordSignUp+label:before, .gate__passwordSignUp+label:after {
    background-color: ${(props) => props.theme.red};
  }

  .gate__confirmationPassword+label:before,   .gate__confirmationPassword+label:after, .gate__passwordConfirmSignUp+label:before, .gate__passwordConfirmSignUp+label:after {
    background-color: ${(props) => props.theme.red};
  }

  .gate__passwordSignIn+label:before,   .gate__passwordSignIn+label:after,   .gate__emailSignIn+label:before,    .gate__emailSignIn+label:after{
    background-color: ${(props) => props.theme.red};
  } 

  .updateEmailPseudo {
    background-color: ${(props) => props.theme.red};
    border: ${(props) => props.theme.borderprofile};
  }

  .profile-delete {
    background-color: ${(props) => props.theme.yellow};
  }

  .redirectSignIn, .redirectSignUp {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
  }

  .formUser-login {
    background-color: ${(props) => props.theme.yellow};
    border: ${(props) => props.theme.bordersignin};
  }

  .home__searchBar__presentation {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    border: ${(props) => props.theme.border};
  }

  .pickyLucky-footerNoSearch__text {
    color: ${(props) => props.theme.fontColor};
  }

`;
