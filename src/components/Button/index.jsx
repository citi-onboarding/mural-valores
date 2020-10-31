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

export default ButtonComponent;
