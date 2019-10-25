import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterItemLi = styled.li`
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

const FilterItem = props => {
  const { name, id } = props;
  return (
    <FilterItemLi>
      <div className="checkbox">
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{name}</label>
      </div>
    </FilterItemLi>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
};

FilterItem.defaultProps = {
  name: 'Filter name',
};

export default FilterItem;
