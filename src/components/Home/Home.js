import React from 'react'
import Nav from '../Nav/Nav';
import './Home.css';
import london from './london.jpg';
import dubai from './dubai.jpg';
import newyork from './newyork.jpg';


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
                            Book a flight right now in 
                        </p>
                        <p>
                        just a few clicks!
                        </p>
                        <button>Book a flight</button>
                    </div>
                </div>
            </div>
            <h2>Amazing prices for some of the most popular destinations.</h2>
            <section className = "pop-flights">
                <div><img src = {london} /></div>
                <div><img src = {dubai} /></div>
                <div><img src = {newyork} /></div>
            </section>
        </div>
    )
}

export default Home
