import React from 'react';
import { ErrorDiv } from './styled';

const Error: React.FC<{ title: string; message: string }> = ({ title, message }) => (
  <ErrorDiv>
    <h3>{title}</h3>
    <p>{message}</p>
  </ErrorDiv>
);

export default Error;
