import styled from 'styled-components';
import Theme from '../../assets/styles/theme';
import { FlexContainer, SectionTitle } from '../../assets/styles/components';

// styles for the card
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
  grid-area: resume;
`;

// styles for the title and the button
const Header = styled(FlexContainer)`
  width: 100%;
  margin: 0;
  padding: 0 2.5625rem;
  height: 5rem;
  box-sizing: border-box;
`;

// styles for the title
const Title = styled(SectionTitle)`
  margin: 0;
  font: ${Theme.font.mediumTitle};
`;

// styles for the button
const SeeMore = styled.button`
  font: ${Theme.font.smallTitle};
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-weight: 500;

  &:hover {
    font-weight: 900;
  }
`;

// styles for the table
const Table = styled.table`
  width: 100%;
  padding: 0;
  margin: 0;
  display: inline-block;
  margin-bottom: 1.4375rem;
`;

// styles for the body of the table
const TBody = styled.tbody`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// styles for the lines of the table
const Line = styled.tr`
  /* the background has to be gray in the first and third line */
  background-color: ${(props) => props.isOdd && '#dddddd'};
  display: grid;
  /* The grid has to have as much columns as the table in the html */
  ${(props) => `grid-template-columns: repeat( ${props.columns}, 1fr);`}
  justify-items: center;
  align-items: center;
  font: ${Theme.font.text};
  width: 100%;
  height: 4.9375rem;
  padding: 0 2.5625rem;
  box-sizing: border-box;
  margin: 0;
  /* If the data array has more than 3 lines, the lines that exceeds this limit will not be shown */
  ${(props) => `display:${props.line > 3 ? ' none;' : ' grid;'}`}

  td:first-child {
    justify-self: start;
  }

  td:last-child {
    justify-self: end;
  }
`;

function setDataColor(content) {
  if (content === 'Concluído') {
    return `color: ${Theme.color.green}; font: ${Theme.font.subtitle};`;
  }
  if (content === 'Pendente') {
    return `color: #f11717; font: ${Theme.font.subtitle};`;
  }
  return `color: black`;
}

const TableData = styled.td`
  /* if the td has the word 'Pendente' or 'Concluído', the text has to have a different color */
  ${(props) => setDataColor(props.children)}
`;

export { Container, Line, Header, Title, SeeMore, Table, TBody, TableData };
