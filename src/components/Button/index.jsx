import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button, Icon, ContentWrapper } from './style';

const ButtonComponent = ({
  text,
  iconSVG,
  size,
  buttonColor,
  reversed,
  color,
  boxShadow,
  border,
  disabled,
  onClick,
}) => {
  return (
    <Button
      iconSVG={iconSVG}
      size={size}
      buttonColor={buttonColor}
      boxShadow={boxShadow}
      border={border}
      reversed={reversed}
      onClick={onClick}
      disabled={disabled}
    >
      <ContentWrapper reversed={reversed}>
        {iconSVG && (
          <Icon color={color} size={size}>
            {iconSVG}
          </Icon>
        )}
        {text && (
          <Text size={size} textColor={color} text={text}>
            {text}
          </Text>
        )}
      </ContentWrapper>
    </Button>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string,
  iconSVG: PropTypes.element,
  size: PropTypes.oneOf(['large', 'medium', 'small', 'fit']),
  buttonColor: PropTypes.oneOf(['white', 'green', 'lightGreen', 'orange']),
  color: PropTypes.oneOf(['white', 'black', 'green']),
  reversed: PropTypes.bool,
  boxShadow: PropTypes.bool,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
  text: '',
  iconSVG: null,
  size: '',
  buttonColor: '',
  reversed: false,
  color: '',
  boxShadow: false,
  border: false,
  disabled: false,
  onClick: () => {},
};

export default ButtonComponent;
