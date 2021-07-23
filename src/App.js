import { Table, TableBody, TableRow } from '@material-ui/core';
import { TableCell, TableContainer, TableHead, Paper } from '@material-ui/core';

import React from 'react';

import Row from './components/Row';
import data from './data';

/////////// Calculating total amount and points

data.forEach(customer => {
  customer.totalAmount = customer.transactions
    .reduce((total, tr) => total + +tr.amount, 0)
    .toFixed(2);

  customer.transactions.forEach(tr => {
    let points = 0;

    if (tr.amount > 50 && tr.amount < 100) {
      points = Math.floor(tr.amount - 50);
    }

    if (tr.amount > 100) {
      points = Math.floor(tr.amount - 100) * 2 + 50;
    }

    tr.points = points;
  });

  customer.totalPoints = customer.transactions.reduce(
    (total, tr) => total + +tr.points,
    0
  );
});

///////////

const App = () => {
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Id</TableCell>
              <TableCell align='right'>Customer</TableCell>
              <TableCell align='right'>Month</TableCell>
              <TableCell align='right'>Total Amount ($)</TableCell>
              <TableCell align='right'>Points Earned</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <Row key={Math.random()} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default App;
