import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SortItemLi = styled.li`
  background-color: ${props => (props.active ? '#2196F3' : 'white')};
  text-align: center;
  width: 100%;
`;
const SortItem = props => {
  const { name, isActive } = props;
  return <SortItemLi active={isActive === 'true'}>{name}</SortItemLi>;
};

SortItem.propTypes = {
  name: PropTypes.string,
  isActive: PropTypes.string.isRequired,
};

SortItem.defaultProps = {
  name: 'Filter name',
};

export default SortItem;
