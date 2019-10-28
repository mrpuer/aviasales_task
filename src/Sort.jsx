import React from 'react';
import PropTypes from 'prop-types';
import SortItem from './SortItem';
import { SortWrapper } from './styled';

const Sort = ({ onChangeSorting }) => {
  const cheapSorting = evn => {
    evn.preventDefault();
    console.log('sort!');

    onChangeSorting(item => item.price);
  };

  const fastSorting = evn => {
    evn.preventDefault();

    onChangeSorting(item => item.segments[0].duration + item.segments[1].duration);
  };

  return (
    <SortWrapper>
      <ul>
        <SortItem name="Самый дешевый" isActive="true" position="left" onClick={cheapSorting} />
        <SortItem name="Самый быстрый" isActive="false" position="right" onClick={fastSorting} />
      </ul>
    </SortWrapper>
  );
};

Sort.propTypes = {
  onChangeSorting: PropTypes.func.isRequired,
};

export default Sort;
