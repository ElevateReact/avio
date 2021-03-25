import React from 'react';
import './FlightTile.css';

const FlightTile = ({price, currency, oneway, departureTime, arrivalTime, carrier, aircraft}) => {
    let dayA = arrivalTime.substr(8,2);
    let monthA = arrivalTime.substr(5,2);
    let yearA = arrivalTime.substr(0,4);
    let hourA = arrivalTime.substr(11,2);
    let minuteA = arrivalTime.substr(14,2);

    let dayD = arrivalTime.substr(8,2);
    let monthD = arrivalTime.substr(5,2);
    let yearD = arrivalTime.substr(0,4);
    let hourD = arrivalTime.substr(11,2);
    let minuteD = arrivalTime.substr(14,2);

    return (
        <div className='flight-tile'>
            <div className='col1'>
                <div>
                    <div>Departure:</div>
                    <div>Arrival:</div>
                </div>
                <div style={{width:'10px'}}>

                </div>
                <div>
                    <div>{`${dayD}/${monthD}/${yearD} - ${hourD}:${minuteD}`}</div>
                    <div>{`${dayA}/${monthA}/${yearA} - ${hourA}:${minuteA}`}</div>
                </div>
            </div>
            <div className='col2'>
                <div>{carrier}</div>
                <div>{aircraft}</div>
            </div>
            <div className='col3'>
                Price: {price + ' ' + currency}
            </div>
        </div>
    )
}
// <i class="fas"></i>
export default FlightTile
