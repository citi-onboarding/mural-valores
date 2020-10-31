import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, ButtonInput, ButtonLabel } from './style';

const Button = ({ name, label, switchValue }) => {
  return (
    <ButtonWrapper>
      <ButtonInput
        type='checkbox'
        id={name}
        name={name}
        onClick={() => switchValue()}
      />
      <ButtonLabel htmlFor={name}>{label}</ButtonLabel>
    </ButtonWrapper>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  switchValue: PropTypes.func,
};

export default Button;
