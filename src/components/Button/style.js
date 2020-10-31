import styled from 'styled-components';
import Theme from '../../assets/styles/theme';

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: no-wrap;
  width: 80%;
  flex-direction: ${(props) =>
    props.reversed === true ? 'row-reverse' : 'row'};
`;

const Text = styled.p`
  font: ${Theme.font.smallTitle};
  ${(props) => {
    if (props.size === 'fit') {
      return `font: ${Theme.font.text};`;
    }
    return '';
  }}
  color: ${(props) => {
    if (props.textColor === 'green') {
      return Theme.color.green;
    }
    if (props.textColor === 'white') {
      return 'white';
    }
    return Theme.color.fontColor;
  }};
  text-align: center;
  ${(props) => {
    if (props.size === 'fit') {
      return 'white-space: nowrap; margin: 0 1rem;';
    }
    return '';
  }}
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${Theme.borderRadius};
  border: ${(props) =>
    props.border ? `solid 1px ${Theme.color.fontColor}` : 'none'};
  outline: none;
  cursor: pointer;
  box-shadow: ${(props) => (props.boxShadow ? Theme.shadow.light : '0')};

  background-color: ${(props) => {
    if (props.buttonColor === 'green') {
      return `${Theme.color.green}`;
    }
    if (props.buttonColor === 'lightGreen') {
      return '#C3DF8A';
    }
    if (props.buttonColor === 'orange') {
      return '#F6B283';
    }
    return `${Theme.color.elementBackgroundColor}`;
  }};

  width: ${(props) => {
    if (props.size === 'large') {
      return '15rem';
    }
    if (props.size === 'medium') {
      return '9rem';
    }
    if (props.size === 'fit') {
      return 'fit-content';
    }
    return '6rem';
  }};
  height: ${(props) => {
    if (props.size === 'large') {
      return '2.5rem';
    }
    if (props.size === 'fit') {
      return '2.75rem';
    }
    return '2rem';
  }};

  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: ${Theme.shadow.lightFocused};
  }
  pointer-events: ${(props) => (props.disabled ? 'none' : 'normal')};
  opacity: ${(props) => (props.disabled ? '0.7' : '1')};
  ${(props) => {
    if (props.size === 'fit') {
      return 'padding: 0 1rem';
    }
    return '';
  }};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: ${(props) => {
      if (props.size === 'large') {
        return '1.5rem';
      }
      return '1rem';
    }};
    width: auto;
  }
  path {
    fill: ${(props) => {
      if (props.color === 'green') {
        return Theme.color.green;
      }
      if (props.color === 'white') {
        return 'white';
      }
      return Theme.color.fontColor;
    }};
  }
`;

export { Text, Button, Icon, ContentWrapper };
