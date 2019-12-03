import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <Container>
        <Home />
      </Container>
    );
  }
}

export default App;