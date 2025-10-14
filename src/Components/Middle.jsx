import React from "react";
import './Middle.css';
import Kiwi from "./Images/Kiwi.png";
import Expedia from "./Images/Expedia.png";
import Network from "./Images/Network.png";
import Indigo from "./Images/Indigo.png";
import Yatra from "./Images/Yatra.png";
import Qatar from "./Images/Qatar.png";
import Spain from "./Images/Spain.png";
import Turkey from "./Images/Turkey.png";
import Morocco from "./Images/Morocco.png";
import France from "./Images/France.png";
import Thailand from "./Images/Thailand.png";
import Mexico from "./Images/Mexico.png";


function Middle() {
  return (
    <div className="middle">

  {/*-----------------------------------------para----------------------------------------------------*/}
      <div className="heading1">
        <p className="paragraph">Compare prices among leading airlines and travel agencies</p>
      </div>

  {/*----------------------------------------images---------------------------------------------------*/}
      <div className="img">
        <a href="https://clnk.in/vMVk"> <img src={Kiwi} alt="Kiwi.com" className="image1"  /></a>
        <a href="https://clnk.in/vMVm"> <img src={Expedia} alt="Expedia" className="image2" /></a>
        <a href="https://clnk.in/vMVn"> <img src={Network} alt="Flight Network" className="image3" /></a>
        <a href="https://clnk.in/vMVq" ><img src={Indigo} alt="Indigo" className="image4" /></a>
        <a href="https://clnk.in/vMVt"><img src={Yatra} alt="Yatra" className="image5" /></a>
      </div>

  {/*---------------------------------------container-------------------------------------------------*/}
      <div className="container">
        <div className="container1">
          <h2 className="heading2">Best flight offers & hotel deals</h2>
          <a href="https://www.farefirst.com/in/offers"className="text">See all</a>
        </div>
      
  {/*-----------------------------------------card----------------------------------------------------*/}
      <div className="card">
        <a href="https://www.farefirst.com/in/offers/169/up-to-20-off-on-economy-class-tickets-qatar-airways-169"> <img src={Qatar} alt="Offer" /></a>
        <a href="https://www.farefirst.com/in/offers/169/up-to-20-off-on-economy-class-tickets-qatar-airways-169"><p >Upto 20% Off on Economy Tickets-Qatar Airways</p></a>
      </div>
    </div>

  {/*-----------------------------------------Destination---------------------------------------------*/}
      <div className="container4">
        <h4 className="heading4">Top Destinations</h4>
        <p className="paragragh2">The most searched Countries in FareFirst</p>
      </div>

  {/*-------------------------------------------row1----------------------------------------------------*/}   
      <div className="row1">
        <div className="image-container">
            <img src={Spain} alt="Spain" className="image7" />
            <p className="image-text">Spain<br></br>#spainindetail</p>
        </div>
        <div className="image-container">
             <img src={Turkey} alt="Turkey" className="image8" />
             <p className="image-text">Turkey<br></br>Be out guest</p>
        </div>
        <div className="image-container">
             <img src={Morocco} alt="Morocco" className="image9" />
             <p className="image-text">Morocco<br></br>Much More</p>
        </div> 
      </div>

  {/*------------------------------------------row2-----------------------------------------------------*/}
      <div className="row2">
          <div className="image-container">
             <img src={France} alt="France" className="image10" />
             <p className="image-text">France<br></br>Rendez vous en France</p>
          </div>

          <div className="image-container">
             <img src={Thailand} alt="Thailand" className="image11" />
             <p className="image-text">Thailand<br></br>Amazing Thailand</p>
          </div>

          <div className="image-container">
              <img src={Mexico} alt="Mexico" className="image12" />
              <p className="image-text">Mexico<br></br>Live it Believe it</p>
          </div>
        </div>
      </div>
  );
}

export default Middle;
