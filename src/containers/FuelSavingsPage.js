import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/fuelSavingsActions';

class FuelSavingsPage extends React.Component {

  constructor(props) {
    super(props);

    this.updateParams = this.updateParams.bind(this);
  }

  updateParams() {
    console.log('pushing');
    this.props.history.push({
      search: '?tags=111'
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.updateParams}>Click me</button>
      </div>
    );
  }
}

FuelSavingsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FuelSavingsPage));
