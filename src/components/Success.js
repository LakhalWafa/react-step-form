import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {
  render() {
    const {
      values: { firstName, lastName, email }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>
            Thank You For Your Submission {firstName} {lastName}{' '}
          </h1>
          <p>You will get an email with further instructions at {email}</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
