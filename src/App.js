// ./src/App.js

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddToDo from './containers/AddToDo';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>To Do List</h1>
            <Home />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;