import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Validator from 'validator';

class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
    formErrors: {
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      bio: ''
    },
    show: false
  };

  showAlert = () => {
    this.setState({ show: true });
  };

  closeAlert = e => {
    e.preventDefault();
    this.setState({ show: false });
  };

  closeAlertNext = () => {
    this.setState({ show: false });
  };

  // Procced to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle filds change
  handleChange = input => e => {
    const { value } = e.target;
    const formErrors = { ...this.state.formErrors };
    switch (input) {
      case 'firstName':
        formErrors.firstName =
          Validator.isEmpty(value) || !Validator.isAlpha(value)
            ? 'Field required'
            : '';
        break;
      case 'lastName':
        formErrors.lastName =
          Validator.isEmpty(value) || !Validator.isAlpha(value)
            ? 'Field required'
            : '';
        break;
      case 'email':
        formErrors.email =
          !Validator.isEmail(value) || Validator.isEmpty(value)
            ? 'Invalid Email'
            : '';
        break;
      case 'occupation':
        formErrors.occupation =
          Validator.isEmpty(value) || !Validator.isAlpha(value)
            ? 'Field required'
            : '';
        break;
      case 'bio':
        formErrors.bio = Validator.isEmpty(value) ? 'Field required' : '';
        break;
      case 'city':
        formErrors.city =
          Validator.isEmpty(value) || !Validator.isAlpha(value)
            ? 'Field required'
            : '';
        break;
      default:
        break;
    }
    this.setState({
      [input]: value,
      formErrors
    });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      occupation,
      city,
      bio,
      email,
      formErrors,
      show
    } = this.state;
    const values = {
      firstName,
      lastName,
      occupation,
      city,
      bio,
      email,
      formErrors,
      show
    };
    // eslint-disable-next-line
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            showAlert={this.showAlert}
            closeAlert={this.closeAlert}
            closeAlertNext={this.closeAlertNext}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            showAlert={this.showAlert}
            closeAlert={this.closeAlert}
            closeAlertNext={this.closeAlertNext}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success values={values} />;
    }
  }
}

export default UserForm;
