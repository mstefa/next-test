import styled from 'styled-components';
import { maxWidth } from '../../GlobalStyles';
import { darkGray, lightTel, lightGray, fzxs, fzxxl } from '../../GlobalStyles';

let tabHeigth = "2.5rem";
let tabHighlightWidth = "0.15rem";
let tabWidth =  "10rem";


export const StyledJobs = styled.section`
  max-width: ${maxWidth};
  min-height: 50vh;
  margin: 5rem auto;
  flex-direction: column;
  h3 {
    width: 100%;
    padding-bottom: 0.5rem;
    font-size: 1.3rem;
    margin: 1rem 0 1rem 0;
  }

  .inner {
    margin: 1rem auto;
    max-width: ${maxWidth};
    display: flex;

      @media (max-width: 600px) {
        display: block;
      }

      // Prevent container from jumping
      @media (min-width: 700px) {
        min-height: 340px;
      }
    }
`;

export const StyledTabList = styled.div`
  position: relative;
  width: max-content;
  padding: 0;
  margin: 0.5rem 0 0 0;
  list-style: none;
  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }
  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

export const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${tabHeigth};
  padding: 0 20px 2px;
  border: 0;
  border-left: ${tabHighlightWidth} solid ${darkGray};
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? lightTel : lightGray)};
  font-size: ${fzxs};
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    width: ${tabWidth};
    padding: 0 15px;
    border-left: 0;
    border-bottom: ${tabHighlightWidth} solid ${darkGray};
    text-align: center;
  }
  &:hover,
  &:focus {
    background-color: ${darkGray};
  }
`;

export const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: ${tabHighlightWidth};
  height:${tabHeigth};
  border-radius: 0.3rem;
  background: ${lightTel};
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * ${tabHeigth}));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: ${tabWidth};
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * ${tabWidth} ));
  }
`;

export const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  max-width: 60rem;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0px;

  h4 {
    margin-top: 0;
    margin-bottom: 2px;
    font-size: ${fzxxl};
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: ${lightTel};
    }
  }

  .range {
    margin-bottom: 25px;
    color: ${lightTel};
    font-size: ${fzxs};
  }

  .itemsList {
    padding: 0;
    li {
      list-style: none;
      margin: 0.5rem 0 ;
    }
    li::before {
      content: '> ';
      color: ${lightTel};
    }
  }

  .skillsList {
    display:flex;
        flex-wrap:wrap;
        justify-content: flex-end;
        list-style: none;
        li {
          font-size:${fzxs};
          margin: 0 0.2rem ;
        }
        li::before {
          content: '# ';
          color:${lightTel};
        }
    }
  
`;
