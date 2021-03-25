import React, { useEffect, useState, useRef } from "react";
import Nav from "../Nav/Nav";
import FlightTile from "../FlightTile/FlightTile";
import './BookFlights.css';
import token from "../../services/token";

const BookFlights = () => {
  const [flights, setFlights] = useState([]);
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [queryFrom, setQueryFrom] = useState("");
  const [queryTo, setQueryTo] = useState("");
  const [queryDate, setQueryDate] = useState("");

  const isMounted = useRef(false);

  useEffect(
    () => {
      if (isMounted.current) {
        getFlights();
      } else {
        isMounted.current = true;
      }
    },
    [queryFrom],
    [queryTo],
    [queryDate]
  );

  const getFlights = async () => {
    const url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${queryFrom}&destinationLocationCode=${queryTo}&departureDate=${queryDate}&adults=${2}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${await token()}`,
      },
    });

    const data = await response.json();

    let newFlights = [];
    for(let i=0;i<data.data.length;i++){
        newFlights.push({
            'price': data.data[i].price.total,
            'currency': data.data[i].price.currency,
            'oneWay': data.data[i].oneWay,
            'departureTime': data.data[i].itineraries[0].segments[0].departure.at,
            'arrivalTime': data.data[i].itineraries[0].segments[0].arrival.at,
            'carrier': data.dictionaries.carriers[data.data[i].itineraries[0].segments[0].carrierCode],
            'aircraft': data.dictionaries.aircraft[data.data[i].itineraries[0].segments[0].aircraft.code]
        });
    }
    setFlights(newFlights);
    console.log(flights);
  };

  const updateSearchFrom = (e) => {
    setSearchFrom(e.target.value);
  };

  const updateSearchTo = (e) => {
    setSearchTo(e.target.value);
  };

  const updateSearchDate = (e) => {
    setSearchDate(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQueryFrom(searchFrom);
    setQueryTo(searchTo);
    setQueryDate(searchDate);
    setSearchFrom("");
    setSearchTo("");
    setSearchDate("");
  };

  return (
    <div className='homeContainer'>
      <div className='fade'></div>
      <Nav></Nav>
      <div className='book-flight'>
      <form onSubmit={getSearch}>
        <input
          onChange={updateSearchFrom}
          className="from"
          value={searchFrom}
          type="text"
          placeholder='From'
        ></input>
        <input
          onChange={updateSearchTo}
          value={searchTo}
          className="to"
          type="text"
          placeholder='To'
        ></input>
        <input
          onChange={updateSearchDate}
          type="date"
          value={searchDate}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className = "display">
          <ol>
            {flights.map((flight) => (
                <FlightTile
                    key = {Math.random()}
                    price = {flight.price}
                    currency = {flight.currency}
                    oneway = {flight.oneway}
                    departureTime = {flight.departureTime}
                    arrivalTime = {flight.arrivalTime}
                    carrier = {flight.carrier}
                    aircraft = {flight.aircraft}
                />
            ))}
          </ol>
      </div>
      </div>
    </div>
  );
};

export default BookFlights;