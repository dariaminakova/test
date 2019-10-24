import React from 'react';
import {useState, useEffect} from 'react';
import './Form.css'

const Input = (props) => {

  const { type, name, value, msgLabel, errorMsg, regEx, lengthValue, checkValidate } = props;
  const [val, setVal] = useState(value);
  const [fieldValidationErrors, setFieldValidationErrors] = useState('');

  const handleUserInput = (e) => {
    setVal(e.target.value);
    validateField(e.target.value);
  }

  const validateField = (value) => {
    // console.log(value.length)
    // if (value.length === 0){
    //   setFieldValidationErrors(reqMsg)
    // } 
    // else {
    const valid = regEx? value.match( new RegExp(regEx, 'i')): value.length >= lengthValue;
    setFieldValidationErrors(valid ? '' : errorMsg);
    props.setValidateField(name, value)
  }

  useEffect(() => {
    if(checkValidate){
      validateField();
    }
      }, [checkValidate]);

  return <div className='formGroup'>
    <label htmlFor={name}>{msgLabel}</label>
    <input type={type} name={name} value={val} onChange={handleUserInput}/>
    <div className='formErrors'>{fieldValidationErrors}</div>
  </div>
}

export default Input;