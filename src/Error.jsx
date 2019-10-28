import React from 'react';
import PropTypes from 'prop-types';
import { ErrorDiv } from './styled';

const Error = ({ title, message }) => {
  return (
    <ErrorDiv>
      <h3>{title}</h3>
      <p>{message}</p>
    </ErrorDiv>
  );
};

Error.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

Error.defaultProps = {
  title: 'Unknown Error',
  message: '',
};

export default Error;
