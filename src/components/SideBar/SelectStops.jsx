import React from 'react';
import './SideBar.css'

const SelectStops = (props) => {
    const stops = [
        { value: '0', descripton: 'без пересадок' },
        { value: '1', descripton: '1 пересадка' },
        { value: '2', descripton: '2 пересадки' },
        { value: '3', descripton: '3 пересадки' }];

    const handleStopChanged = (value) => {
       props.onShowOnlyOneStop (value)
    }

    const handleStopsChanged = (value) => {
        props.onStopsChanged(value)
    }

    const handleAllStops = (checked) => {
        props.onShowAllStops(checked)
    }
        
    const showInputs = stops.map((stop) => {
        return <div className='labelBox' key={stop.value}> <label htmlFor={stop.value}>
                <input onChange={(e) => { handleStopsChanged(e.target.value) }}
                type='checkbox' checked={props.stops.includes(stop.value)}
                id={stop.value} value={stop.value} /><span>{stop.descripton}</span> </label>
                <button className='btnOnly' value={stop.value} onClick={(e) => handleStopChanged(e.target.value)}>только</button>
            </div>
    })

    return (
        <div className='filter-stops' >
            <div className='labelBox'> <label htmlFor='all'>
                <input onChange={(e) => { handleAllStops(e.target.checked) }}
                type='checkbox' checked={props.stops.includes('all')}
                id='all' value='all' /><span>все</span></label>
            </div>
            {showInputs}
        </div>
    )
}

export default SelectStops;