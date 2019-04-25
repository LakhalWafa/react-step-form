import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

class Success extends Component {
  render() {
    const {
      values: { firstName, lastName, email }
    } = this.props;
    return (
      <MuiThemeProvider>
        <div className="container">
          <Paper>
            <AppBar title="Success" />
            <h1 className="my-5">
              Thank You For Your Submission {firstName} {lastName}{' '}
            </h1>
            <p className="mb-5">
              You will get an email with further instructions at {email}
            </p>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Success;
