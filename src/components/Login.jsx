import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as IndexActions from 'src/actions/index';
import { bindActionCreators } from 'redux';

class Login extends Component {
  render() {
    const { flg, actions } = this.props;
    const msg = flg ? 'true' : 'false';
    return (
      <div>
        Login
        <br />
        {msg}
        <br />
        <button type="button" onClick={() => actions.actionTest()}>ボタン</button>
      </div>
    );
  }
}

Login.propTypes = {
  flg: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = state => ({
  flg: state.test.flg,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(IndexActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
