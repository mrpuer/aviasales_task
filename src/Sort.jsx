import React from 'react';
import PropTypes from 'prop-types';
import SortItem from './SortItem';
import { SortWrapper } from './styled';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'cheap',
    };
  }

  cheapSorting = () => {
    this.setState({ activeButton: 'cheap' });
  };

  fastSorting = () => {
    this.setState({ activeButton: 'fast' });
  };

  render() {
    const { activeButton } = this.state;
    const { onChangeSorting } = this.props;
    return (
      <SortWrapper>
        <SortItem
          title="Самый дешевый"
          isActive={activeButton === 'cheap'}
          position="left"
          clickSortHandle={onChangeSorting('price')}
          clickActiveHandle={this.cheapSorting}
        />
        <SortItem
          title="Самый быстрый"
          isActive={activeButton === 'fast'}
          position="right"
          clickSortHandle={onChangeSorting('duration')}
          clickActiveHandle={this.fastSorting}
        />
      </SortWrapper>
    );
  }
}

Sort.propTypes = {
  onChangeSorting: PropTypes.func.isRequired,
};

export default Sort;
