import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Jumbotron, Button, Form, InputGroup, Alert } from 'react-bootstrap';

import * as actions from '../actions';
import WelcomePage from '../components/WelcomePage';

class Home extends React.Component {
  render() {
    const { result, error, isLoading, actions } = this.props;
    let input;

    return (
      <Jumbotron>
        <WelcomePage />
        <Form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            actions.processCommand(input.value);
           // input.value = '';
          }}
        >
          <Form.Group controlId="from1">
            <InputGroup>
              <Form.Control
                type="text" required
                placeholder="Enter commands"
                ref={node => {
                  input = node;
                }} />
              <InputGroup.Append>
                <Button type="submit" >Submit</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        <div>
          <p>
            {error && error.response && <Alert variant="danger" >{error.response.data}</Alert>}
 
            {result && <Alert variant="primary">{result}</Alert>}           
          </p>
        </div>
      </Jumbotron>
    );
  }
}

Home.propTypes = {
  result: PropTypes.string,
  error: PropTypes.object,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  result: state.result,
  error: state.error,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
