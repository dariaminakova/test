import React, { Component } from 'react';
import FormErrors from './FormErrors'

import './Form.css'

class Form extends Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      email: '',
      phone: '',
      firstname: '',
      secondname: '',
      passportnumber: '',
      formErrors: { email: '', phone: '', firstname: '', secondname: '', passportnumber: '' },
      emailValid: false,
      phoneValid: false,
      firstnameValid: false,
      secondnameValid: false,
      passportnumberValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => { this.validateField(name, value) });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state;
    console.log(data)
    JSON.stringify(data);
    this.props.onCloseModal(this.openModal)
    this.props.onShowSuccess()
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;
    let firstnameValid = this.state.firstnameValid;
    let secondnameValid = this.state.secondnameValid;
    let passportnumberValid = this.state.passportnumberValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' Введите почту в формате name@mail.com ';
        break;
      case 'phone':
        phoneValid = value.match(/^\d{10}$/);
        fieldValidationErrors.phone = phoneValid ? '' : ' Введите номер телефона в формате 0*********';
        break;
      case 'firstname':
        firstnameValid = value.length >= 2;
        fieldValidationErrors.firstname = firstnameValid ? '' : ' Имя должно не менее двух символов';
        break;
      case 'secondname':
        secondnameValid = value.length >= 4;
        fieldValidationErrors.secondname = secondnameValid ? '' : ' Фамилия должна не менее четырех символов';
        break;
      case 'passportnumber':
        passportnumberValid = value.length >= 9;
        fieldValidationErrors.passportnumber = passportnumberValid ? '' : ' Введите серия и номер паспорта в формате АА 000000';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      phoneValid: phoneValid,
      firstnameValid: firstnameValid,
      secondnameValid: secondnameValid,
      passportnumberValid: passportnumberValid
    }, this.validateForm);
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid
        && this.state.phoneValid
        && this.state.firstnameValid
        && this.state.secondnameValid
        && this.state.passportnumberValid
    });
  }

  render() {
    const { onCloseModal, openModal } = this.props
    return (
      <div>
        <div className='panel panel-default'>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className='titleForm'>
          <h2> Оформить заказ </h2>
          <button
            className='btn-cancel'
            onClick={() => { onCloseModal(openModal) }}>отмена</button>
        </div>
        <form onSubmit={this.handleSubmit} className='form'>
          <div className='formGroup'>
            <label htmlFor='email'> Электронная почта </label>
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleUserInput} />
          </div>
          <div className='formGroup'>
            <label htmlFor='phone'> Номер телефона </label>
            <input
              type='phone'
              name='phone'
              value={this.state.phone}
              onChange={this.handleUserInput} />
          </div>
          <div className='formGroup'>
            <label htmlFor='firstname'> Имя </label>
            <input
              type='text'
              name='firstname'
              value={this.state.firstname}
              onChange={this.handleUserInput} />
          </div>
          <div className='formGroup'>
            <label htmlFor='secondname'> Фамилия </label>
            <input
              type='text'
              name='secondname'
              value={this.state.secondname}
              onChange={this.handleUserInput} />
          </div>
          <div className='formGroup'>
            <label htmlFor='passportnumber'> Номер паспорта </label>
            <input
              type='text'
              name='passportnumber'
              value={this.state.passportnumber}
              onChange={this.handleUserInput} />
          </div>
          <button
            type='submit'
            className='btn-submit'
            disabled={!this.state.formValid}> Отправить </button>
        </form>
      </div>
    );
  }
}

export default Form;