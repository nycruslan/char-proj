import { CssBaseline, Container } from '@material-ui/core';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <CssBaseline>
    <Container maxWidth='md'>
      <App />
    </Container>
  </CssBaseline>,
  document.querySelector('#root')
);
