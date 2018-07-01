/* eslint no-confusing-arrow: "off" */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display:          flex;
  padding:          12px 24px;
  cursor:           pointer;
  font-weight:      500;
  font-size:        0.8em;
  background:       ${({ active }) => active ? 'black' : 'white'};
  color:            ${({ active }) => active ? 'white' : 'black'};
  user-select:      none;
  color: box-shadow: 0px 0px 1px silver;
  &:first-child {
    margin-top: 0em;
  }
  &:hover {
    box-shadow: 0px 0px 4px rgba(192,192,192, 0.9);
  }
`;

class Button extends PureComponent {
  render() {
    const {
      label, active, onClick,
    } = this.props;

    return (
      <Wrapper
        active={active}
        onClick={onClick}
      >
        {label}
      </Wrapper>
    );
  }
}

Button.defaultProps = {
  active: false,
  label: '',
  onClick: () => {},
};

Button.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
