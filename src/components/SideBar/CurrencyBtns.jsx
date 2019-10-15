import React from 'react';

import './SideBar.css'

const CurrencyBtns = (props) => {

return(
    <div className='change-cash' onClick = { (e) =>{props.setCurrency(e.target.value)}}>
        <button className='currency-btn' value='rub'>RUB</button>
        <button className='currency-btn' value='usd'>USD</button>
        <button className='currency-btn' value='eur'>EUR</button>
    </div>
    )
}

export default CurrencyBtns;