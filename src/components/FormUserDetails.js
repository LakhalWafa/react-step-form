import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

class FormUserDetails extends Component {
  validate = () => {
    const { firstName, lastName, email, formErrors } = this.props.values;
    if (formErrors.firstName || formErrors.lastName || formErrors.email) {
      return false;
    }
    if (!(firstName || lastName || email)) {
      return false;
    }
    return true;
  };

  continue = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.props.nextStep();
      this.props.closeAlertNext();
    } else {
      this.props.showAlert();
    }
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <div className="container">
          <Paper>
            <AppBar title="Enter User Details" />

            <TextField
              name="firstname"
              type="text"
              hintText="Enter Your First Name"
              floatingLabelText="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
            />
            <div style={{ fontSize: 12, color: 'red' }}>
              {values.formErrors.firstName}
            </div>

            <br />

            <TextField
              name="lastname"
              type="text"
              hintText="Enter Your Last Name"
              floatingLabelText="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
            />
            <div style={{ fontSize: 12, color: 'red' }}>
              {values.formErrors.lastName}
            </div>

            <br />

            <TextField
              name="email"
              type="email"
              hintText="Enter Your Email"
              floatingLabelText="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
            <div style={{ fontSize: 12, color: 'red' }}>
              {values.formErrors.email}
            </div>

            <br />
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />

            {values.show ? (
              <div
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                <strong>Form Filds Required!</strong> You should fill the
                fields.
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick={this.props.closeAlert}
                >
                  x
                </button>
              </div>
            ) : null}
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
