import styled from 'styled-components';
import Theme from '../../assets/styles/theme';

// styles for the whole component
const Component = styled.div`
  /* styles for the label that is right after a input in focus */
  input:focus + label {
    bottom: 5rem;
    opacity: 1;
  }
`;

// styles for the label
const Label = styled.label`
  font: ${Theme.font.smallTitle};
  display: flex;
  flex-direction: column;
  margin: 0.625rem 0 0 1.25rem;
  position: relative;
  bottom: 2.8125rem;
  opacity: 0.5;
  ${(props) => {
    // if the input has something inside, copy the style from the :focus
    if (props.hasSomething) {
      return 'bottom: 5rem; opacity: 1;';
    }
    return '';
  }}
  transition: 0.3s;
  cursor: text;
  width: fit-content;
  pointer-events: none;
`;

// styles for the input
const Input = styled.input`
  font: ${Theme.font.text};
  height: 3.125rem;
  width: ${({ width }) => width};
  border-radius: 1.5rem;
  box-shadow: 0px 0.1875rem 0.375rem #00000059;
  outline: none;
  border: none;
  padding: 0 1.25rem;
`;

export { Component, Label, Input };
