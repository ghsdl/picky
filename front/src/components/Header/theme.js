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
  connected: "#F4BB01",
  borderconnected: "3px solid #F4BB01",
  fontconnected: "#FFF",
  red: "#F4BB01",
  title: "#FFF",
  pickyMood: "#F4BB01",
  pickyMoodFont: "#FFF",
  bordermood: "solid 3px #F4BB01",
  gradient: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 85%)",
  gradientFont: "#000",
  bordermood: "solid 1px #F4BB01",
  toastify: "#FFF",
  modalBackground: "#FFF"
};

export const darkTheme = {
  body: "#2D2525",
  background: "#333",
  fontColor: "#fff",
  border: "3px solid #FFF",
  borderprofile: "3px solid #CE4257",
  bordersignin: "3px solid #F4BB01",
  yellow: "#F4BB01",
  connected: "#F4BB01",
  borderconnected: "3px solid #F4BB01",
  fontconnected: "#FFF",
  red: "#CE4257",
  title: "#333",
  pickyMood: "#CE4257",
  pickyMoodFont: "#FFF",
  bordermood: "solid 3px #CE4257",
  gradient: "linear-gradient(180deg, rgba(45, 37, 37, 0) 0%, #2D2525 67.81%)",
  gradientFont: "#FFF",
  bordermood: "solid 1px #CE4257",
  toastify: "#FFF",
  modalBackground: "#333"
};

export const GlobalStyles = createGlobalStyle`
html {
  background-color: ${(props) => props.theme.body};
}

  div {
    color: ${(props) => props.theme.fontColor};
  }
  .pickMoodContent-item {
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
  .gate__pseudo+label:after, .gate__pseudoSignUp+label:after {
    background-color: ${(props) => props.theme.red};
  }
  .gate__email+label:after, .gate__emailSignUp+label:after  {
    background-color: ${(props) => props.theme.red};
  }
  .gate__password+label:after, .gate__passwordSignUp+label:after {
    background-color: ${(props) => props.theme.red};
  }
  
  .gate__confirmationPassword+label:after, .gate__passwordConfirmSignUp+label:after {
    background-color: ${(props) => props.theme.red};
  }
  .gate__passwordSignIn+label:after,  .gate__emailSignIn+label:after{
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
    border: ${(props) => props.theme.bordersignin};
    background-color: ${(props) => props.theme.connected};
    border: ${(props) => props.theme.borderconnected};
    color: ${(props) => props.theme.fontconnected};
  }
  .home__searchBar__presentation, .pickyMood-question, .profileLuckyPicky-title, .pickyWish-question, .profile-title {
    background-color: ${(props) => props.theme.title};
    color: ${(props) => props.theme.fontColor};
    border: ${(props) => props.theme.border};
  }
  .pickyLucky-footerNoSearch__text, .pickyLucky__footer__text {
    color: ${(props) => props.theme.fontColor};
  }

  .pickMoodContent-item-clicked, .button-precedent, .button-suivant,  .button-newResearch, .search-button {
    background-color: ${(props) => props.theme.pickyMood};
    color: ${(props) => props.theme.pickyMoodFont};
  }
  .pickMoodContent-item {
    border: ${(props) => props.theme.bordermood};
  }

  .wish__gradient, .pickyLucky__gradient, .mood__gradient {
    background: ${(props) => props.theme.gradient};
  }

  .home--research {
    .home__gradient {
      background: ${(props) => props.theme.gradient};
    }
  }

  .Toastify__toast-body {
    color: ${(props) => props.theme.toastify};
  }

  .wish__footer, .pickyLucky__footer, .mood__footer {
    color: ${(props) => props.theme.gradientFont};
  }

  .home--research {
    .home__footer {
      color: ${(props) => props.theme.gradientFont};
    }
  }

  .modal {
    background-color: ${(props) => props.theme.modalBackground};
  }
`;
