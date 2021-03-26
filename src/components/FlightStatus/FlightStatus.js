import React from 'react'
import Nav from '../Nav/Nav';
import Map from '../Map/Map';

const FlightStatus = () => {
    return (
        <div className='homeContainer'>
            <div className='fade'></div>
            <Nav></Nav>
            <Map></Map>
            <p style={{textAlign: 'center',padding:'20px',backgroundColor:'#eee'}}><a href='https://github.com/FranMaric'>Fran Marić</a> & <a href='https://github.com/yelle99'>Jelena Hrga</a> © FrontEd Hackathon 2021</p>
        </div>
    )
}

export default FlightStatus
