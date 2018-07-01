import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  background-color: black;
  color: white;
`;

class Header extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Wrapper {...this.props}>
        {children}
      </Wrapper>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: undefined,
};

export default Header;
