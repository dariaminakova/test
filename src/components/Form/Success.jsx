import React from 'react';
import './Form.css'

const Success = (props) =>{
  return(
    <div className='success'>
      <p>ПОЗДРАВЛЯЕМ, ФОРМА ОТПРАВЛЕНА!</p>
      <button onClick={() => { props.onShowSuccess() }}> close </button>
    </div>
  )
}
export default Success;