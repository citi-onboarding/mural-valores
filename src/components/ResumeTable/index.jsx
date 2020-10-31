import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Line,
  Header,
  Title,
  SeeMore,
  Table,
  TBody,
  TableData,
} from './style';

function ResumeTable({ title, detailsAction, data }) {
  while (data.length < 3) {
    data.push([]);
  }
  return (
    <Container>
      <Header justify='space-between' align='center'>
        <Title>{title}</Title>
        <SeeMore onClick={detailsAction}>Ver mais</SeeMore>
      </Header>
      <Table>
        <TBody>
          {data.map((element, index) => {
            return (
              <Line
                key={index}
                line={index + 1}
                isOdd={(index + 1) % 2 !== 0}
                columns={element.length}
              >
                {element.map((element2, index2) => {
                  return <TableData key={index2}>{element2}</TableData>;
                })}
              </Line>
            );
          })}
        </TBody>
      </Table>
    </Container>
  );
}

ResumeTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  detailsAction: PropTypes.func,
  title: PropTypes.string,
};

export default ResumeTable;
