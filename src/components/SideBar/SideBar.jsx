import React from 'react';
import CurrencyBtns from './CurrencyBtns';
import SelectStops from './SelectStops'
import './SideBar.css'

const SideBar = (props) => {

    return (
        <div className='sideBar-container'>

            <h5>ВАЛЮТА</h5>
            <CurrencyBtns
                currency={props.currency} 
                setCurrency={props.setCurrency} />
            <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
            <SelectStops
                {...props}/>
        </div>
    )
}

export default SideBar;