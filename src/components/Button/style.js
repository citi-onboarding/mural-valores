import styled from 'styled-components';
import Theme from '../../assets/styles/theme';

const ButtonWrapper = styled.div`
  margin-bottom: 0.5rem;
`;
const ButtonInput = styled.input`
  margin-right: 0.75rem;
`;
const ButtonLabel = styled.label`
  font: ${Theme.font.smallTitle};
`;

export { ButtonWrapper, ButtonInput, ButtonLabel };
