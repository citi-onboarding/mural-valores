import Styled from 'styled-components';
import Theme from '../../assets/styles/theme';

const Container = Styled.div`
  ${(props) => {
    if (props.disabled) {
      return 'opacity: 0.5;';
    }
    return '';
  }}
 width: 20%;

 *{
    outline: none;]
  }

  .time-picker{
    background-color: white;
    height: 3.125rem;
    width: 100%;
    border-radius: 1.5rem;
    box-shadow: 0px 0.1875rem 0.375rem #00000059;

    *{
      font: ${Theme.font.smallTitle};
    }

    .react-time-picker__wrapper{
      border: none;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.5rem;
      @media(max-width: 1100px){
        padding: 0 0.1rem;
      }

      .react-time-picker__inputGroup{
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        flex-grow: 1;
        min-width: 20px;
      }

      .react-time-picker__clear-button{
          display: none;
      }

      .react-time-picker__clock-button{
        transition: 0.3s;
        padding-left: 0.5rem;

        svg {
          height: 2.5rem;
        }

        &:hover{
          ${(props) => {
            if (!props.disabled) {
              return 'transform: scale(1.1);';
            }
            return '';
          }}
        }

        @media(max-width: 1600px) {
          transform: scale(0.75);

          &:hover{
          ${(props) => {
            if (!props.disabled) {
              return 'transform: scale(0.85);';
            }
            return '';
          }}
        }
        }
        @media(max-width: 1100px){
          padding: 0 0 0 0.5rem;
        }
      }
    }
  }

  .react-time-picker__clock{
    display: none;
  }

  &.is-not-focused{
    label{
      position: relative;
      top: 2.2rem;
      opacity: 0.5;
      left: 2.7rem;
      @media(max-width: 1100px){
        left: 2rem;
      }
      @media(min-width: 1600px){
        left: 2.3rem;
      }
    }

    .react-time-picker__inputGroup{
      opacity: 0 !important;
    }
`;

const Label = Styled.label`
  z-index: 4;
  transition: 0.3s;
  margin-left: 1.25rem;
  margin-bottom: 0.5625rem;
  font: ${Theme.font.smallTitle};
  position: relative;
  top: -0.5rem;
  left: 0px;
  font-weight: 900;
`;

export { Container, Label };
