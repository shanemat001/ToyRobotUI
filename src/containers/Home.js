import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as robotActions from '../actions';

class Home extends React.Component {
  render() {
    const { actions, error, isLoading } = this.props;

    return (
      <div>
        {error && <h3>Error: {error.response.data}</h3>}
        {isLoading ? <h1>Loading ...</h1>
          : (
            <div>
              <h1>Search subscriber</h1>
              <input type="text" name="Subscriber" />
              <button type="button" onClick={() => actions.getSubscriber('73737373')}>Get Subscriber</button>
            </div>
          )
        }
      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  result: PropTypes.object,
  error: PropTypes.object,
};

const mapStateToProps = state => ({
  result: state.robot.result,
  error: state.robot.error,
  isLoading: state.robot.isLoading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(robotActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);