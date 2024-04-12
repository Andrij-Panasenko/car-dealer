import { createGlobalStyle } from 'styled-components';
import MulishBlack from '../fonts/Mulish-Black.ttf';
import MulishBold from '../fonts/Mulish-Bold.ttf';
import MulishMedium from '../fonts/Mulish-Medium.ttf';
import OswaldBold from "../fonts/Oswald-Bold.ttf"

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "Mulish";
    src: url(${MulishMedium});
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: "Mulish";
    src: url(${MulishBold});
    font-weight: 700;
    font-style: normal;
}


@font-face {
    font-family: "Mulish";
    src: url(${MulishBlack});
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: "Oswald";
    src: url(${OswaldBold});
    font-weight: 700;
    font-style: normal;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Mulish", sans-serif;
  margin: 0;
  padding: 0;
  overflow: scroll;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ol, ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
    text-decoration: none;
  }

p {
  padding: 0;
  margin: 0;
}

input, textarea, select, button {
  font: inherit;
}
`;
