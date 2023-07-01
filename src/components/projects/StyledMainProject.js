import styled from 'styled-components'
import { lightGray, darkGray, lightTel, darkTel } from "../../GlobalStyles";

export const StyledMainProject = styled.div`
  position: relative;
  margin: 4rem  0 0 0;

  h3{
      position: absolute;
      right: 0;
      padding-bottom: 0.5rem;
      border-bottom: 0.1rem solid ${lightTel};
      width: 14rem;
      font-size:1.3rem;
      margin: 1rem 0 1rem 0;

    }

    a:hover{
        color:${lightTel};
        transition: all 500ms ease;
      }

  .img-contanier{
    img{
      width: 60%;
    }
  }

  .text-container{
    position: absolute;
    top: 3rem;
    left:55%;
    width: 45%;
    text-align:right;
  
    p{
      min-height: 8rem;
      background-color: ${`${darkGray}F2` } ;  
      color: ${lightGray};
      padding: 0.2rem 1rem 0rem 0.1rem;
    }
      
    ul {
        display:flex;
        flex-wrap:wrap;
        justify-content: flex-end;
        list-style: none;
        li {
          font-size:0.8rem;
          margin: 0 0.2rem ;
        }
        li::before {
          content: '> ';
          color:${lightTel};
        }
      }

      a{
        color:${lightGray};
        font-weight: lighter;
        margin: 0 0.4rem;
        :hover{
        color:${lightTel};
        transition: all 500ms ease;
      }
      }    
  }

  @media (max-width: 850px) {
    
    margin: 0.5rem;
    position: static;

    h3{
      position:static;
    }
    .img-contanier{
      img{
        width: 100%;
      }
    }

    .text-container{
      position: static;
      width: 100%;
      p{
        padding: 0.5rem 0.5rem;
      }
      /* height: auto; */
      text-align:left;
    }

  }

`