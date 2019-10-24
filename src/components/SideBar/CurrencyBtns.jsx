import React from 'react';
import { useState } from 'react';

import './SideBar.css'

const CurrencyBtns = (props) => {

    const [active, setActive] = useState();
    const currency = [
        {currency:'rub', name: 'RUB', id: 1},
        {currency:'usd', name: 'USD', id: 2},
        {currency:'eur', name: 'EUR', id: 3}];

    const buttons = currency.map((e)=>{
      return <button key={e.id} className={active === e.currency ? 'active-btn' : 'currency-btn'} onClick = { () =>{setActive(e.currency)}} value={e.currency}>{e.name}</button>
    })

return(
    <div className='change-cash' onClick = { (e) =>{props.setCurrency(e.target.value)}}>
        {buttons}
    </div>
    )
}

export default CurrencyBtns;