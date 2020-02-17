import React from 'react';
import MainContent from './MainContent';
import logo from './img/logo.svg';
import { GlobalStyle, Header } from './styled';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <img src={logo} alt="Aviasales logo" />
      </Header>
      <MainContent />
    </>
  );
};

export default App;
