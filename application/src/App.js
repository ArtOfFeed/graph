import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './components/theme';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Movies from "./components/Movies/Movies";

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <Movies />
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
