import styled from 'styled-components';
import { lightTel, backgroundRed, animationTime } from "../../GlobalStyles";


export const StyledNav = styled.nav`


  position: sticky; /* Make it stick/fixed */
  top: 0; /* Stay on top */
  display: flex;
  justify-content: space-between;
  z-index:1;
  top:${props => props.top };
  background-color:${backgroundRed + 'b0'};
  transition: top 0.5s;

  @keyframes fade {
    from {
      opacity:0%;
    }
    to {
      opacity:100%;
    }
  }

  img{
    margin: 0.5rem 0 0.5rem 2rem;
    animation-duration: ${animationTime};
    animation-name: fade;
  }

  ul{
    display: flex;
    padding: 0;
    list-style-type: none;
    margin-right: 4rem;
    font-size:1.1rem;

    li{
      margin-left: 2rem;
      padding: 0 0.1rem;
      animation-duration: ${animationTime};
      animation-name: fade;
      a:hover{
        color:${lightTel};
        transition: all 500ms ease;
      }
      ::before {
          content: '> ';
          color:${lightTel};
          padding: 0 0.5rem;
      }
    }
  }
  @media (max-width: 850px) {
    ul{
      margin-right: 1rem;
      li{::before {
          content: none;
          padding: 0 ;
      }

      }
    }
  }
`