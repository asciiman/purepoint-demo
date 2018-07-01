/* eslint no-confusing-arrow: "off" */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ResultItem from './ResultItem';

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

class ResultPanel extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <Wrapper>
        {data.map(item => (
          <ResultItem title={item.title} href={item.href} />
        ))}
      </Wrapper>
    );
  }
}

ResultPanel.defaultProps = {
  data: [],
};

ResultPanel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default ResultPanel;
