import React from 'react';

import './SideBar.css'

const SelectStops = (props) => {

const stops = [
    {
        value: 'all',
        descripton: 'все'
    },
    {
        value: 0,
        descripton: 'без пересадок'
    },
    {
        value: 1,
        descripton: '1 пересадка'
    },
    {
        value: 2,
        descripton: '2 пересадки'
    },
    {
        value: 3,
        descripton: '3 пересадки'
    }
]

const showInputs = stops.map((stop) => 
{return <label key={stop.value} htmlFor={stop.value}>
    <input type='checkbox' id={stop.value} value={stop.value} /> {stop.descripton} </label>})

return(
    <div className='filter-stops' onChange = {(e) => {props.onStopsChanged(e.target.value)}}>
        {showInputs}
    </div>
    )
}

export default SelectStops;