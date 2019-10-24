import React, { Component } from 'react';
import Input from './Input';

import './Form.css'

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: false,
      phone: false,
      firstname: false,
      secondname: false,
      passportnumber: false,
      formValid: false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state;
    this.props.onSubmit(data)
    this.props.onOpenModal()
    this.props.onShowSuccess()
  }
  setValidateField(name, value) {
    this.setState({
      [name]: value
    }, this.validateForm);
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.email
        && this.state.phone
        && this.state.firstname
        && this.state.secondname
        && this.state.passportnumber
    });
  }
  inputsArr = [
    {
      type: 'email',
      name: 'email',
      value: '',
      msgLabel: 'Электронная почта',
      errorMsg: 'Введите почту в формате name@mail.com',
      reqMsg: 'Пожалуйста, заполните поле',
      regEx: '^([\\w.%+-]+)@([\\w-]+\\.)+([\\w]{2,})',
      id: 1
    },
    {
      type: 'phone',
      name: 'phone',
      value: '',
      msgLabel: 'Номер телефона',
      errorMsg: 'Введите номер телефона в формате 0*********',
      reqMsg: 'Пожалуйста, заполните поле',
      regEx: '^\\d{10}',
      id: 2
    },
    {
      type: 'text',
      name: 'firstname',
      value: '',
      msgLabel: 'Имя',
      errorMsg: 'Имя должно не менее двух символов',
      reqMsg: 'Пожалуйста, заполните поле',
      regEx: '',
      lengthValue: 2,
      id: 3
    },
    {
      type: 'text',
      name: 'secondname',
      value: '',
      msgLabel: 'Фамилия',
      errorMsg: 'Фамилия должна не менее четырех символов',
      reqMsg: 'Пожалуйста, заполните поле',
      regEx: '',
      lengthValue: 4,
      id: 4
    },
    {
      type: 'text',
      name: 'passportnumber',
      value: '',
      msgLabel: 'Номер паспорта',
      errorMsg: 'Введите серия и номер паспорта в формате АА 000000',
      reqMsg: 'Пожалуйста, заполните поле',
      regEx: '',
      lengthValue: '9',
      id: 5
    }
  ]

  showInputs = this.inputsArr.map((input) => {
    return <Input key={input.id} type={input.type} name={input.name} value='' msgLabel={input.msgLabel}
      errorMsg={input.errorMsg} reqMsg={input.reqMsg} regEx={input.regEx} lengthValue={input.lengthValue}
      setValidateField={this.setValidateField.bind(this)} />
  })

  render() {
    const { onOpenModal } = this.props
    return (
      <div>
        <div className='titleForm'>
          <h2> Оформить заказ </h2>
          <button
            className='btn-cancel'
            onClick={() => { onOpenModal() }}>отмена</button>
        </div>
        <form onSubmit={this.handleSubmit} className='form'>
          {this.showInputs}
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