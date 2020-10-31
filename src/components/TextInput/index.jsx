import React from 'react';
import PropTypes from 'prop-types';
import { Component, Label, Input } from './style';

function TextInput(props) {
  const [hasSomething, setHasSomething] = React.useState(false);
  function handleChange(e) {
    props.onChange(e.target.value);
    if (e.target.value === '') {
      setHasSomething(false);
    } else {
      setHasSomething(true);
    }
  }
  return (
    <Component>
      <Input
        id='Input'
        onChange={handleChange}
        value={props.value}
        width={props.width}
      />
      <Label htmlFor='Input' hasSomething={props.value}>
        {props.label}
      </Label>
    </Component>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  width: PropTypes.string,
};

TextInput.defaultProps = {
  label: 'label',
  onChange: () => {},
};

export default TextInput;
