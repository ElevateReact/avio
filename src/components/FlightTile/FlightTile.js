import React from 'react'

const FlightTile = ({price, currency, oneway, departure, arrival, carrier, aircraft}) => {
    return (
        <li>Price: {price}{currency}</li>
    )
}

export default FlightTile
