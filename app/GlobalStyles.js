import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

// export var mainRed = "#3b1410";
export var mainRed = "#820801";
export var darkRed = "#4F0501";
export var ultraDarkRed = "#2f0d0a";
export var backgroundRed = "#111010";
// export var backgroundRed = "#2f0d0a";
export var lightRed = "#CF4740";
export var lightTel = "#17CFC5";
export var darkTel = "#06625C";
export var lightGreen = "#41CF17";
export var darkGreen = "#41CF17";
export var lightGray = "#F2F2F2";
export var mediumGray = "#888888";
export var darkGray = "#262626";

export var maxWidth = "70rem";
export var animationTime = "1.5s";

// font sizes
export var fzxxs= "12px";
export var fzxs= "15px";
export var fzsm= "18px";
export var fzmd= "22px";
export var fzlg= "28px";
export var fzxl= "30px";
export var fzxxl= "32px";
export var fzheading= "42px";


export const GlobalStyles = createGlobalStyle`

html{
  scroll-behavior: smooth; 
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${backgroundRed };
  color: ${lightGray};
  counter-reset: section; 
  a{
    text-decoration: none;
    color: ${lightGray};
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

section{
  width:80vw;
  margin : 1rem 10vw 0rem 10vw ;
}

h2{
  font-size:2rem;
  .far{
    color:${lightTel};
    font-size: 1rem;
    font-weight:lighter;
    padding-right: 0.6rem;
  }
}

footer{
  /* margin: 0 auto; */
  font-size: 0.8rem;
  text-align:center;
  vertical-align: middle;
  min-height: 3rem;
}

@media (max-width: 850px) {
    
  section{
  width:90vw;
  margin : 1rem 5vw 0rem 5vw ;
  }

  h2{
  font-size:1.8rem;
  }

  }
`

export const StyledMainButton = styled.button`
  background-color: ${backgroundRed + '00'};
  color:${lightTel};
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  border: 0.08rem solid ${lightTel};
  border-radius: 0.5rem; 
  cursor: pointer;
`