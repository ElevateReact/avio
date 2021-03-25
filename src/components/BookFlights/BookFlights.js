import React from 'react'
import Nav from '../Nav/Nav';

import token from "../../services/token";

const BookFlights = () => {

    const getFlights = async()=>{
        const url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${"SYD"}&destinationLocationCode=${"BKK"}&departureDate=${"2021-11-01"}&adults=${2}`
        const response = await fetch(url, {
            method: 'GET', 
            headers: {
                authorization : `Bearer ${await token()}`,
            }
        });

        console.log(await response.json());
    };

    getFlights();

    return (
        <div>
            <Nav></Nav>
        </div>
    )
}

export default BookFlights;