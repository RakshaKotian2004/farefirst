import React, {useState, useEffect } from "react";
import { useNavigate, useLocation,Link } from "react-router-dom";
import './Header.css';
import logo from "./Images/logo.svg"
import Flag from "./Images/Flag.png"

function Header(){

  const location=useLocation();
  const isResultsPage=location.pathname==="/results";

  /*---------------------------input field-1:useState,useEffect-------------------------------------------*/
  
  const [inputValue,setInputValue]=useState("");
  const [result,setResult]=useState([]);
  const [hasSelected,setHasSelected]=useState(false);

  useEffect(() => {
    if (inputValue.length>0 && !hasSelected) {
      fetch(`https://autocomplete.farefirst.com/places2?term=${inputValue}&types=airport&locale=en&max=7`)
        .then((res) => res.json())
        .then((data) => setResult(data||[]))
        .catch((err) => console.error("Error fetching airports:",err));
    } else {
      setResult([]);
    }
  }, [inputValue,hasSelected]);

  /*------------------------------input field-2:useState,useEffect-----------------------------------*/
  const [inputValue2,setInputValue2]=useState("");
  const [result2,setResult2]=useState([]);
  const [hasSelected2,setHasSelected2]=useState(false);

  useEffect(() => {
    if (inputValue2.length>0 && !hasSelected2) {
      fetch(`https://autocomplete.farefirst.com/places2?term=${inputValue2}&types=airport&locale=en&max=7`)
        .then((res) => res.json())
        .then((data) => setResult2(data||[]))
        .catch((err) => console.error("Error fetching airports:",err));
    }else {
      setResult2([]);
    }
  },[inputValue2,hasSelected2]);

  /*--------------------------------input field-3--------------------------------------------------*/
  const [selectedDate,setSelectedDate]=useState("");
  const [flights,setFlights]=useState([]); 

  /*----------------------------------handling Search Button-------------------------------------------*/
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const handleSearch=async() => {
    if (!inputValue || !inputValue2 || !selectedDate) {
      return alert("Please fill departure, arrival, and date fields");
    }
    setLoading(true);  
    const url=`https://funapiproxy-4mqabsrzhq-uc.a.run.app/flights?key=0&from=${inputValue}&to=${inputValue2}&departureDate=${selectedDate}&client=bixby&locale=IN`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const flights = data.results || [];
      navigate("/results",{state:{ flights,loading: false } });
    } catch (err) {
      console.error("Error fetching flights:",err);
      alert("Failed to fetch flights.Try again.");
    } finally {
      setLoading(false); 
    }
  };

  /*---------------------------------------RETURN-----------------------------------------------------*/
  return(
    <div className={`app ${isResultsPage ? "small-header" : ""}`}>
                  
  {/*--------------------------------------Farefirst Logo---------------------------------------------*/}
      <div className="header">
        <Link to="/"><img src={logo} className="heading" alt="FareFirst Logo"/></Link>

  {/*------------------------------------------list-1------------------------------------------------*/} 
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Flights</Link></li>
            <li><a href="https://www.farefirst.com/hotels"target="_blank">Hotels</a></li>
            <li><a href="https://www.farefirst.com/cars"target="_blank"> Cars</a></li>
            <li><a href="https://www.farefirst.com/nomad"target="_blank">Nomad</a></li>
            <li><a href="https://www.farefirst.com/esim"target="_blank"> eSIM <span className="new">New</span></a></li>
            <li><a href="https://www.farefirst.com/visa"target="_blank">Visa</a></li>
            <li> <a href="https://www.farefirst.com/experience"target="_blank">Experience</a></li>
          </ul>
        </nav>
          
          
  {/*-----------------------------------------list-2-----------------------------------------------*/}
        <nav>
          <ul className="nav-link">
            <li><a href="https://www.farefirst.com/in/offers"target="_blank">Offers</a></li>
            <li>
              <span className="span">
                <img src={Flag} alt="Flag" className="flag" />
                <a href="https://www.farefirst.com/#"target="_blank">INR </a>
              </span>
            </li>
            <li><a href="https://www.farefirst.com/login"target="_blank"> Login</a></li>
          </ul>
        </nav>
      </div>
      <hr className="underline"></hr>

  {/*----------------------------------------input fields------------------------------------------*/}
      <div className="middle2">
        {!isResultsPage && (
          <>
            <h1 className="middle1">Book a Flight</h1>
            <p className="middlepara">Search hundreds of travel sites at once</p>
          </>
        )}

        
  {/*----------------------------------------input field-1------------------------------------------*/}
        <div className="search-box">
          <span className="span1">
            <i className="fa-solid fa-plane-departure"></i>
            <input type="text" placeholder="Flying from ?" value={inputValue}
              onChange={(e) => {setInputValue(e.target.value); 
                                setHasSelected(false);}}/>

            {result.length > 0 && (
              <ul className="result-list">
                {result.map((item, index) => (
                  <li key={index} onClick={() => { setInputValue(item.name); 
                                                   setResult([]); 
                                                   setHasSelected(true); }}>
                    <span className="code-box">{item.code}</span> {item.name}

                  </li>
                ))}
              </ul>
            )}
          </span>

  {/*--------------------------------------input field-2---------------------------------------------*/}
          <span className="span1">
            <i className="fa-solid fa-plane-arrival"></i>
            <input type="text" placeholder="Flying to ?" value={inputValue2}
              onChange={(e) => { setInputValue2(e.target.value); 
                                 setHasSelected2(false); }}/>

            {result2.length > 0 && (
              <ul className="result-list">
                {result2.map((item, index) => (
                  <li key={index} onClick={() => { setInputValue2(item.name); 
                                                   setResult2([]); 
                                                   setHasSelected2(true); }}>
                     <span className="code-box">{item.code}</span> {item.name}
                  </li>
                ))}
              </ul>
            )}
          </span>

  {/*-----------------------------------------input field-3------------------------------------------*/}
          
                
          <span className="span1">
            <i className="fa-solid fa-calendar calendar-icon"></i>
              <input type="date" value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              onFocus={(e) => e.target.showPicker()}
            />
          </span>
          

  {/*--------------------------------------------Search button----------------------------------------*/}
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>

  {/*------------------------------------------Paragraphs----------------------------------------------*/}
        {!isResultsPage && (
          <div className="features">
            <div className="feature">
              <span className="span4">
                <i className="fa-solid fa-route feature-icon"></i>
                <h3>Explore the World</h3>
                <p>Start to discover. We will help you to visit <br />any place you can imagine</p>
              </span>
            </div>
            <div className="feature">
              <span className ="span5">
                <i className="fa-solid fa-user-gear feature-icon"></i>
                <h3>Personalized Offers</h3>
                <p>Save more with offers and coupons<br /> personalized for your travel needs</p>
              </span>
            </div>
            <div className="feature">
              <span className="span6">
                <i className="fa-solid fa-book-open-reader feature-icon"></i>
                <h3>Book Smart</h3>
                <p>Find cheapest flight deals from several<br /> websites across the world with ease</p>
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Header;
