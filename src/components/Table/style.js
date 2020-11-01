import styled from 'styled-components';
import Theme from '../../assets/styles/theme';
import { ScrollbarStyle } from '../../assets/styles/components';

// styles for the card
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 13rem);
  overflow: scroll;
  overflow-x: hidden;

  ${ScrollbarStyle}

  &::-webkit-scrollbar-track {
    margin: 6.3rem 0 1.5rem;
  }
`;

// styles for the table
const TableElement = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  font: ${Theme.font.text};
`;

// styles for the line
const Tr = styled.tr`
  margin: 0 1rem;
  padding: 0;
  border-bottom: 0.1875rem solid rgb(219, 219, 219);

  :last-child {
    border-bottom: none;
    height: 100%;
  }
`;

// styles for the header of the table
const THead = styled.thead`
  height: 6.125rem;
`;

// style for a item of the header
const Th = styled.th`
  border-left: 0.1875rem solid rgb(219, 219, 219);
  border-bottom: 0.1875rem solid rgb(219, 219, 219);
  height: 6.125rem;
  font: ${Theme.font.mediumTitle};
  background-color: white;
  position: sticky;
  top: 0;

  * {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.3125rem;
  }

  & > div {
    border-bottom: 0.1875rem solid rgb(219, 219, 219);
    border-right: 0.1875rem solid rgb(219, 219, 219);
    height: calc(100% + 0.1875rem);
    width: calc(100% + 0.1875rem);
    padding: 0;
    margin: 0;
  }

  &:first-child {
    border-left: none;
  }

  &:last-child > * {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
  }
`;

// styles for the arrow in the side of the column name
const SortButton = styled.button`
  background: none;
  border: none;
  height: fit-content;
  outline: none;
  cursor: pointer;
  opacity: 0.25;
  ${(props) => {
    let result = '';
    // if the number of times clicked in that column sort is even, make the arrow point up (except if it is 0)
    if (
      props.clicks[props.index] % 2 === 0 &&
      props.clicks[props.index] !== 0
    ) {
      result = 'transform: rotate(180deg);';
    }
    // if the column is the reference for the sort, make the sort button darker
    if (props.index === props.referenceColumn) {
      result += 'opacity: 1;';
    }
    return result;
  }}
  transition: 0.2s;

  svg {
    width: 0.8275rem;
    height: 0.5rem;
  }
`;

// styles for the body of the table
const TBody = styled.tbody`
  tr {
    height: 3.9375rem;

    :last-child {
      height: 100%;

      td {
        height: 100%;
      }
    }
  }
`;

// styles for the items in the table body
const Td = styled.td`
  border-left: 0.1875rem solid rgb(219, 219, 219);
  height: 3.9375rem;
  text-align: center;

  &:first-child {
    border-left: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1.25rem;
  }

  &:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    margin-left: -0.05rem;

    & button {
      background-color: white;
      box-shadow: 0px 0.1875rem 0.375rem #00000029;
      border: 0.125rem solid rgba(112, 112, 112, 0.61);
      border-radius: 0.3125rem;
      outline: none;
      height: 1.875rem;
      width: 6.125rem;
      font-family: sans-serif;
      font-size: 1.5rem;
      cursor: pointer;
      transition: 0.1s;

      &:active {
        box-shadow: 0px 0px 0px #00000029;
        color: black;
      }

      &:hover {
        font-weight: 900;
      }
    }
  }
`;

export { Container, TableElement, Tr, THead, Th, SortButton, TBody, Td };
