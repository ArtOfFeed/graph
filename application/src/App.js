import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import ImageList from "./components/ImageList/ImageList";

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <ImageList/>
      </ApolloProvider>
    );
  }
}

export default App;
