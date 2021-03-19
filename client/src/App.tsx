import React from 'react';
import './App.css';
import Heading from './components/Heading/Heading';
import { CssBaseline, ThemeProvider} from '@material-ui/core';
import theme from './theme/theme';
import Wrapper from './components/Wrapper/Wrapper';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Wrapper>
            <Switch>
              <Route path="/" exact>
                <AuthLayout />
              </Route>
            </Switch>
          </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
