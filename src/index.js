import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import Routes from './routes';
import ThemeProvider from './routes/App/contexts/ThemeProvider';
import './styles/_main.scss';

ReactDOM.render(
  <ThemeProvider>
    <AppContainer>
      <Routes />
    </AppContainer>
  </ThemeProvider>,
  document.getElementById('root')
);
