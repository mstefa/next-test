import styled from 'styled-components';
import { lightTel, animationTime } from "../../GlobalStyles";

export const StyledSocialMedia = styled.nav`

  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 8rem;
  align-items: center;
  width: 5rem;

  @keyframes slideIn {
    from {
      transform: translateY(1rem);
      opacity:10%;
    }
    to {
      transform: translateY(0px);
      opacity:100%;
    }
  }

  ul{
    padding: 0;
    list-style-type: none;
    animation-duration: ${animationTime};
    animation-name: slideIn;
    li{
      margin: 1rem 0 1rem 0;
    }
  }
  
  a{
    /* color: white; */
    font-size: 1.1rem;
    :hover{
        color:${lightTel};
        transition: all 500ms ease;
      }
  }

  .line{
    width: 0.5rem;
    height: 10rem;
    border-right: 0.1rem solid white;
    position: absolute;
    animation-duration: ${animationTime};
    animation-name: slideIn;
    }

    @media (max-width: 850px) {
    
    display:none;
  
    }
    
`