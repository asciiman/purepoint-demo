/* eslint no-confusing-arrow: "off" */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  &:nth-child(2n-1) {
    background: lightgray;
  }
`;
const Link = styled.a`
  &:link {
    text-decoration: none;
    font-size: 14px;
  }
`;

class ResultPanel extends PureComponent {
  render() {
    const { title, href } = this.props;

    return (
      <Wrapper>
        <Link href={href}>
          {title}
        </Link>
      </Wrapper>
    );
  }
}

ResultPanel.defaultProps = {
  title: '',
  href: '',
};

ResultPanel.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
};

export default ResultPanel;
