import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

class FormPersonalDetails extends Component {
  validate = () => {
    const { occupation, city, bio, formErrors } = this.props.values;
    if (formErrors.occupation || formErrors.city || formErrors.bio) {
      return false;
    }
    if (!(occupation || city || bio)) {
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

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <div className="container">
          <Paper>
            <AppBar title="Enter Personal Details" />
            <TextField
              hintText="Enter Your Occupation"
              floatingLabelText="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
            />
            <div style={{ fontSize: 12, color: 'red' }}>
              {values.formErrors.occupation}
            </div>
            <br />
            <TextField
              hintText="Enter Your City"
              floatingLabelText="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
            />
            <div style={{ fontSize: 12, color: 'red' }}>
              {values.formErrors.city}
            </div>
            <br />
            <TextField
              hintText="Enter Your Bio"
              floatingLabelText="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
            />
            <div style={{ fontSize: 12, color: 'red' }}>
              {values.formErrors.bio}
            </div>

            <br />
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
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

export default FormPersonalDetails;
