import React from 'react';
import PropTypes from 'prop-types';
import { Arrow } from '../../assets/icons';
import {
  Container,
  TableElement,
  Tr,
  THead,
  Th,
  SortButton,
  TBody,
  Td,
} from './style';

function Table(props) {
  const [referenceColumn, setReferenceColumn] = React.useState(-1);
  const [headerCount, setHeaderCount] = React.useState(
    props.header.map(() => {
      return 0;
    }),
  );
  // const [tableData, setTableData] = React.useState(props.data);

  // function that checks if the td is the last one in the row so it can add the button
  function returnTds(element2, index2, length, index) {
    if (index2 + 1 === length) {
      return (
        <Td key={index2}>
          <p>{element2}</p>
          <button onClick={props.data[index].action}>Detalhes</button>
        </Td>
      );
    }
    return <Td key={index2}>{element2}</Td>;
  }

  // function that handles the click in the sort button
  function handleClick(index) {
    setReferenceColumn(index);
    let arrayAux = props.data;
    let hasNan = false;
    const headerCountAux = headerCount;
    headerCountAux[index] += 1;
    setHeaderCount([...headerCountAux]);

    arrayAux = arrayAux.sort((a1, b1) => {
      let a = a1;
      let b = b1;
      if (headerCountAux[index] % 2 === 0) {
        a = b1;
        b = a1;
      }

      const arrayAuxA = a.data[index].split(' ');
      const arrayAuxB = b.data[index].split(' ');

      // check if it has 'n/n/n n:n' format (cause if it has, it will be sorted differently)
      if (arrayAuxA.length === 2 && arrayAuxB.length === 2) {
        arrayAuxA[0] = arrayAuxA[0].split('/');
        arrayAuxA[1] = arrayAuxA[1].split(':');

        arrayAuxB[0] = arrayAuxB[0].split('/');
        arrayAuxB[1] = arrayAuxB[1].split(':');

        // if one of the items is a NAN the hasNan variable will be set to true
        arrayAuxA[0].forEach((date) => {
          hasNan = hasNan || isNaN(date);
          arrayAuxA[1].forEach((hour) => {
            hasNan = hasNan || isNaN(hour);
          });
        });

        arrayAuxB[0].forEach((date) => {
          hasNan = hasNan || isNaN(date);
          arrayAuxB[1].forEach((hour) => {
            hasNan = hasNan || isNaN(hour);
          });
        });

        // if it has not a NAN, thus it only contains numbers and is in the correct format
        if (!hasNan) {
          const dateA = arrayAuxA[0][2] + arrayAuxA[0][1] + arrayAuxA[0][0];
          const hourA = arrayAuxA[1][0] + arrayAuxA[1][1];

          const dateB = arrayAuxB[0][2] + arrayAuxB[0][1] + arrayAuxB[0][0];
          const hourB = arrayAuxB[1][0] + arrayAuxB[1][1];

          if (dateA > dateB) {
            return 1;
          }
          if (dateA < dateB) {
            return -1;
          }

          if (hourA > hourB) {
            return 1;
          }
          if (hourA < hourB) {
            return -1;
          }
          // a must be equal to b
          return 0;
        }
      }

      // if it is not in that format
      if (a.data[index] > b.data[index]) {
        return 1;
      }
      if (a.data[index] < b.data[index]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    props.onChange([...arrayAux]);
  }

  return (
    <Container>
      <TableElement>
        <THead>
          <Tr>
            {props.header.map((element, index) => {
              return (
                <Th key={index}>
                  <div>
                    <div>
                      <p>{element}</p>
                      <SortButton
                        index={index}
                        clicks={headerCount}
                        referenceColumn={referenceColumn}
                        onClick={() => {
                          handleClick(index);
                        }}
                      >
                        <Arrow />
                      </SortButton>
                    </div>
                  </div>
                </Th>
              );
            })}
          </Tr>
        </THead>
        <TBody>
          {props.data.map((element, index) => {
            return (
              <Tr key={index}>
                {element.data.map((element2, index2) => {
                  return returnTds(
                    element2,
                    index2,
                    element.data.length,
                    index,
                  );
                })}
              </Tr>
            );
          })}
          <Tr>
            {props.header.map((element, index) => {
              return <Td key={index}></Td>;
            })}
          </Tr>
        </TBody>
      </TableElement>
    </Container>
  );
}

Table.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      data: PropTypes.arrayOf(PropTypes.string),
      action: PropTypes.func,
    }).isRequired,
  ),
};

export default Table;
