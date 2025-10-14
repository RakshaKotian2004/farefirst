import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";

function Result() {
  const location = useLocation();
  const { flights = [], loading = false } = location.state || {};

  const [openIndex, setOpenIndex] = useState(null);
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="result-page">
      {loading && <p>Loading flights...</p>}
      {!loading && flights.length === 0 && <p>No flights found</p>}

      {!loading &&
        flights.map((flight, index) => {
          if (!flight.from ||!flight.to ||!flight.price)         
          {
            return null; 
          }

          return (
  //-----------------------------Flight-card----------------------------------------------------------// 
            <div className={`flight-card ${openIndex === index ? "expanded" : ""}`}
              key={index}
            >
              <div className="flight-row">
  {/*----------------------------- Airline Logo---------------------------------------------------- */}
                <div className="logo-col">
                  {flight.from?.airlineLogoUrl && (
                    <img src={flight.from.airlineLogoUrl} alt="logo" className="airline-logo"/>
                  )}
                </div>

 {/*------------------------------------ iata---------------------------------------------------------- */}
                <div className="route-col">
                  <div className="iata">
                    {flight.from?.iata} - {flight.to?.iata}
                  <div className="gate">  
                    {flight.gate?.name}
                   </div> 
                  </div>

  {/*-------------------------------------Time------------------------------------------------------  */}
                  <div className="time">
                    {flight.from?.prettyTime} - {flight.to?.prettyTime}
                  </div>
                  <div className="hour">
                    {flight.total_duration?.h}h  {flight.total_duration?.m}m  
                  </div>
                </div>

  {/*---------------------------------- Stops-------------------------------------------------------- */}
                <div className="col direct-col">
                  <div className="direct-text">
                    {flight.totalStops === 0? "Direct": `${flight.totalStops} stop(s)`}
                  </div>
                </div>

 {/*--------------------------------- Price,Book Now-------------------------------------------------- */}
                <div className="col price-col">
                  <div className="flight-price">
                    {flight.price?.symbol}
                    {flight.price?.amount}
                   </div>
                  <button className="book-btn" onClick={() =>window.open(flight.gate?.redirectUrl, "_blank")}>
                    Book Now
                  </button>
                </div>

{/*-------------------------------------- Dropdown toggle--------------------------------------------- */}
                <div className="dropdown-toggle">
                  <button onClick={() => toggleDropdown(index)} className="dropdown-btn">
                    {openIndex === index ? (<i className="fa-solid fa-caret-up"></i>) : (<i className="fa-solid fa-caret-down"></i>)}
                  </button>
                </div>
              </div>

{/*------------------------------------ Expanded dropdown  card --------------------------------------*/}
              {openIndex === index && (
                <div className="dropdown-content">
                  <div className="dropdown-top-row">
                    <div className="dropdown-date">
                      {flight.from?.prettyDate || flight.to?.prettyDate}
                    </div>
                    <div className="logo">
                    {flight.from?.airlineLogoUrl && (
                      <img src={flight.from.airlineLogoUrl} alt="airline" className="dropdown-logo"/>
                    )}
                    </div>

                    <div className="dropdown-time">
                      {flight.from?.prettyTime} - {flight.to?.prettyTime}
                    </div>
                  </div>

                  <div className="dropdown-cities">
                    {flight.from?.info?.city} - {flight.to?.info?.city}
                  </div>

                  <div className="dropdown-airports">
                    {flight.from?.info?.name} - {flight.to?.info?.name}
                  </div>

                  <div className="dropdown-name">
                    <span>{flight.gate?.name}</span>
                  </div>
                 
                 
                  <div className="min">
                      {flight.total_duration?.h}h  {flight.total_duration?.m}m
                  </div> 
                  <div className="stop">
                       Stops:{flight.totalStops} 
                  </div>
                  </div>
                
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Result;
