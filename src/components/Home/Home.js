import React from 'react'
import Nav from '../Nav/Nav';
import './Home.css';
import london from './london.jpg';
import dubai from './dubai.jpg';
import newyork from './newyork.jpg';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className = "homeContainer">
            <div className = "home">
                <Nav></Nav>
                <div className = "wrapper">
                    <div className = "intro">
                        <p>
                            Travel the World with us. 
                        </p>
                        <p>
                            Book a flight right now!
                        </p>
                        <Link to="/bookflights"><button className='button'><span>Book a flight</span></button></Link>
                    </div>
                </div>
                <div className='fade'></div>
            </div>
            <h2>Popular destinations</h2>
            <section className = "pop-flights">
                <article><img src = {london} /><p>London</p></article>
                <article><img src = {dubai} /><p>Dubai</p></article>
                <article><img src = {newyork} /><p>New York</p></article>
            </section>
            <p style={{textAlign: 'center',padding:'20px',backgroundColor:'#eee'}}><a href='https://github.com/FranMaric'>Fran Marić</a> & <a href='https://github.com/yelle99'>Jelena Hrga</a> © FrontEd Hackathon 2021</p>
        </div>
    )
}

export default Home
