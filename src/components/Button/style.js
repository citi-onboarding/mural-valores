import styled from 'styled-components';
import Theme from '../../assets/styles/theme';

const ButtonWrapper = styled.div`
  margin-bottom: 0.5rem;
  background-color: #8cba4e;
  padding: 0.25rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const ButtonInput = styled.input`
  margin-right: 0.75rem;
  font-size: 0.9rem;
`;

const ButtonLabel = styled.label`
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ButtonIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export { ButtonWrapper, ButtonInput, ButtonLabel, ButtonIcon };
