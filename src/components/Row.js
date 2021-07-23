import { Box, Collapse, IconButton, Table, TableBody } from '@material-ui/core';
import { TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import React, { useState } from 'react';

const Row = ({ row }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.id}
        </TableCell>
        <TableCell align='right'>{row.name}</TableCell>
        <TableCell align='right'>{row.month}</TableCell>
        <TableCell align='right'>-{row.totalAmount}</TableCell>
        <TableCell align='right'>{row.totalPoints}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                Transactions
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align='right'>Amount ($)</TableCell>
                    <TableCell align='right'>Reward Points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.transactions.map(transactionsRow => (
                    <TableRow key={transactionsRow.date}>
                      <TableCell component='th' scope='row'>
                        {transactionsRow.date}
                      </TableCell>
                      <TableCell align='right'>
                        -{transactionsRow.amount}
                      </TableCell>
                      <TableCell align='right'>
                        {transactionsRow.points}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default Row;
