import React, { useState } from 'react';
import ReactTimePicker from 'react-time-picker';
import PropTypes from 'prop-types';
import { Container, Label } from './style';
import { Clock } from '../../assets/icons';

function TimePicker({
  onChange,
  value,
  label,
  minTime,
  maxTime,
  disabled,
  className,
}) {
  const [hasSomething, setHasSomething] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
    document
      .querySelector(`.${className} input.react-time-picker__inputGroup__hour`)
      .focus();
  }

  function handleBlur() {
    if (!hasSomething) {
      setIsFocused(false);
    }
  }

  function handleChange(input) {
    onChange(input);
    if (input === undefined) {
      setHasSomething(false);
    } else {
      setHasSomething(true);
    }
  }

  return (
    <Container
      className={!isFocused && !value && 'is-not-focused'}
      disabled={disabled}
    >
      <Label>{label}</Label>
      <ReactTimePicker
        locale='pt-BR'
        className={`time-picker ${className}`}
        hourPlaceholder='--'
        minutePlaceholder='--'
        onChange={handleChange}
        value={value}
        clockIcon={<Clock />}
        format='HH:mm'
        minTime={minTime}
        maxTime={maxTime}
        disabled={disabled}
        onClockOpen={handleFocus}
        onClockClose={handleBlur}
      />
    </Container>
  );
}

TimePicker.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.object,
  minTime: PropTypes.object,
  maxTime: PropTypes.object,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

TimePicker.defaultProps = {
  label: 'label',
  onChange: () => {},
  value: undefined,
  minTime: undefined,
  maxTime: undefined,
  disabled: false,
  className: '',
};

export default TimePicker;
