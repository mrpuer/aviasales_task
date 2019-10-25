import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import MainContent from './MainContent';
import OpenSansRegular from './fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from './fonts/OpenSans-SemiBold.ttf';
import OpenSansLight from './fonts/OpenSans-Light.ttf';

import logo from './img/logo.svg';

const GlobalStyle = createGlobalStyle`
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

const Header = styled.header`
  text-align: center;
  padding: 30px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <img src={logo} alt="Aviasales logo" />
      </Header>
      <MainContent />
    </>
  );
}

export default App;
