import React from "react";
import {useNavigate} from "react-router-dom";
import "./Booking.css";

function Booking(){
    const navigate = useNavigate();
    return(
        <div className="booking-page">
         <div className="booking">
            <div className="emoji">🎉</div> 
            <h1>Thank You for Booking!</h1>
            <p>Your flight has been successfully booked.<br></br>We've sent the details to your registered email.</p>
            <button  onClick={() => navigate("/")} className="button">Back to Home</button>
         </div>
        </div>
    )
}

export default Booking;