import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import OpenSansRegular from './fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from './fonts/OpenSans-SemiBold.ttf';
import OpenSansLight from './fonts/OpenSans-Light.ttf';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegular});
  }
  
  @font-face {
    font-family: 'Open Sans Regular';
    src: url(${OpenSansSemiBold});
  }
  
   @font-face {
    font-family: 'Open Sans Light';
    src: url(${OpenSansLight});
  }
  
  body {
    min-width: 800px;
    background-color: #f3f7fa;
    font-family: 'Open Sans Regular';
    font-size: 12px;
    font-style: normal;
    color: #4A4A4A;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  h3 {
    margin: 0;
  }
`;

export const Header = styled.header`
  text-align: center;
  padding: 30px;
`;

export const MainContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-transform: uppercase;
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
`;

export const SidebarWrapper = styled.aside`
  background: #ffffff;
  border-radius: 5px;
  width: 230px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  h3 {
    line-height: 12px;
    padding: 20px 20px 10px 20px;
    font-size: 12px;
  }
`;

export const FilterItemsList = styled.ul`
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  text-transform: none;
  padding-bottom: 10px;
  font-family: 'Open Sans Light';
`;

export const FilterItemLi = styled.li`
  padding: 10px 20px;
  &:hover {
    background-color: #f1fcff;
  }

  .checkbox {
    input[type='checkbox'] {
      opacity: 0;

      & + label::after {
        content: none;
      }

      &:checked + label::after {
        content: '';
      }

      &:checked + label::before {
        border-color: #2196f3;
      }

      &:focus + label::before {
        outline: rgb(59, 153, 252) auto 3px;
      }
    }

    label {
      cursor: pointer;
      margin-left: 20px;
      position: relative;
      display: inline-block;
      width: 80%;

      &::before,
      &::after {
        position: absolute;
        content: '';
        display: inline-block;
      }

      &::before {
        left: -32px;
        top: -2px;
        width: 20px;
        height: 20px;
        border: 1px solid #9abbce;
        border-radius: 2px;
      }

      &::after {
        left: -26px;
        top: 3px;
        height: 6px;
        width: 9px;
        border-left: 2px solid;
        border-bottom: 2px solid;
        transform: rotate(-45deg);
        color: #2196f3;
      }
    }
  }
`;

export const SearchResultsWrapper = styled.main`
  width: 500px;
  margin-left: 20px;
`;

export const SortWrapper = styled.section`
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
`;

export const SortButton = styled.button`
  background-color: ${props => (props.active ? '#2196F3' : 'white')};
  border: ${props => (props.active ? '1px solid #2196F3' : '1px solid #DFE5EC')};
  color: ${props => (props.active ? '#FFFFFF' : 'inherit')};
  width: 100%;
  height: 48px;
  line-height: 20px;
  border-radius: ${props => (props.position === 'left' ? '5px 0 0 5px' : '0 5px 5px 0')};
  text-transform: uppercase;
`;

export const FlightsList = styled.section`
  margin-bottom: 50px;
`;

export const FlightLi = styled.li`
  background-color: #ffffff;
  width: 460px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
`;

export const FlyInfoMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FlyPrice = styled.h2`
  font-size: 24px;
  line-height: 24px;
  color: #2196f3;
  margin: 0;
`;

export const CompanyLogo = styled.span`
  margin-right: 30px;
`;

export const FlyInfoDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const FlyInfoTitle = styled.div`
  color: #a0b0b9;
  line-height: 18px;
`;

export const FlyInfoElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
`;

export const FlyInfoContent = styled.div`
  font-size: 14px;
  line-height: 21px;
  text-transform: none;
`;

export const ErrorDiv = styled.div`
  color: tomato;
  text-align: center;
  margin-top: 50px;
  text-transform: none;
`;
