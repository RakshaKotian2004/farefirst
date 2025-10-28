import React from "react";
import {useLocation} from "react-router-dom";
import "./Footer.css";
import Phone from "./Images/Phone.png";
import Google from "./Images/Google.svg";
import Appstore from "./Images/Appstore.svg";
import Gallery from "./Images/Gallery.svg";
import Indus from "./Images/Indus.png";
import Galaxy from "./Images/Galaxy.png";
import Bixby from "./Images/Bixby.png";
import logo from "./Images/logo.svg"


function Footer() {
   const location = useLocation();
   const isResultsPage = location.pathname === "/results";

  return (
    <div className=" footer">
{/*-----------------------------------------Download-------------------------------------------------------*/}
        {!isResultsPage && (
        <div className="bottom">
               <h1 className="heading1">Download our app</h1>
               <p className="para1">Unlock a world of travel possibilities with the FareFirst <br></br> app the best travel app for your mobile device.</p>
               <img src={Phone} alt="Phone" className="phone"/>
        <div className="rows21">
            <div className="row22">
               <a href="https://play.google.com/store/apps/details?id=com.cheapflightsapp.flightbooking"target="_blank"><img src={Google} alt="Google" className="google" /></a>
               <a href="https://apps.apple.com/in/app/farefirst-flights-hotels/id1435065486"target="_blank">     <img src={Appstore} alt="Appstore" className="appstore" /></a>
            </div>
            <div className="row23">
               <a href="https://appgallery.huawei.com/app/C101289807"target="_blank"> <img src={Gallery} alt="Gallery" className="gallery" /></a>
               <a href="https://www.indusappstore.com/apps/travel-and-local/farefirst/com.cheapflightsapp.flightbooking?page=details&id=com.cheapflightsapp.flightbooking"target="_blank"><img src={Indus} alt="Indus" className="indus" /></a>
            </div>
            <div className="row24">
               <a href="https://galaxystore.samsung.com/detail/com.cheapflightsapp.flightbooking"target="_blank"><img src={Galaxy} alt="Galaxy" className="galaxy" /></a>
               <a href="https://www.samsung.com/us/apps/bixby/"target="_blank"><img src={Bixby} alt="Bixby" className="bixby" /></a>
            </div>
        </div>
    </div>
        )}  

    {/*----------------------------------------------Email---------------------------------------------*/}
    
    <div className="footerpart">
        {!isResultsPage && (
        <div className="input">
            <span className="footerspan">
                <i className="fa-regular fa-envelope"></i>
                <h4 className="footerheading">Subscribe to our newsletter</h4>
            </span>
                <p className="para10">We will occasionally send exclusive deals, travel tips and news.</p>
            <form className="form">
                <input type="text" placeholder="Enter your Email" required className="email" />
                <button className="button3"><a href="https://www.farefirst.com/"target="_blank"> Subscribe</a></button>
            </form>
        </div>
    )}   

    {/*------------------------------------------------Links-------------------------------------------*/}
        <div className="list">
                <img src={logo} className="logo1" />
                <p className="para20">Helps you find the cheapest flight <br></br>deals to any destination with ease.</p>
                <p className="para30">Browse through the best hotels and <br></br>find exclusive deals.</p>

            <nav>
                <ul className="unorderedlist1">
                    <h5 className="listheading1">About</h5>
                    <li className="list1"><a href="https://www.farefirst.com/about"target="_blank">About Us</a></li>
                    <li className="list2"><a href="https://play.google.com/store/apps/details?id=com.cheapflightsapp.flightbooking"target="_blank">Android App</a></li>
                    <li className="list3"><a href="https://apps.apple.com/in/app/farefirst-flights-hotels/id1435065486"target="_blank">iOS App</a></li>
                    <li className="list4"><a href="https://www.farefirst.com/nomad-multi-destination-trip-planner"target="_blank">About Nomad</a></li>
                    <li className="list5"><a href="https://www.farefirst.com/blog/index.html"target="_blank">Blog</a></li>
                </ul >
            </nav>
            <nav>
                <ul className="unorderedlist2">
                    <h5 className="listheading2">Explore</h5>
                    <li className="list6" ><a href="https://farefirst-web-clone.vercel.app/"target="_blank">Flights</a></li>
                    <li className="list7"><a href="https://www.farefirst.com/hotels"target="_blank">Hotels</a></li>
                    <li className="list8"><a href="https://www.farefirst.com/cars"target="_blank">Cars</a></li>
                    <li className="list9"><a href="https://www.farefirst.com/nomad"target="_blank">Nomad</a></li>
                    <li className="list10"><a href="https://www.farefirst.com/visa"target="_blank">Visa</a></li>
                    <li className="list11"><a href="https://www.farefirst.com/esim"target="_blank">eSIM</a></li>
                    <li className="list12"><a href="https://www.farefirst.com/experience"target="_blank">Experience</a></li>
                    <li className="list13"><a href="https://www.farefirst.com/in/offers"target="_blank">Offers</a></li>
                    <li className="list14"><a href="https://www.farefirst.com/cheap-flights-app"target="_blank">Mobile App</a></li>
                </ul>
            </nav>

            <nav>
                <ul className="unorderedlist3">
                    <h5 className="listheading3">More</h5>
                    <li className="list15"><a href="https://www.farefirst.com/contact-us"target="_blank">Customer Support</a></li>
                    <li className="list16"><a href="https://www.farefirst.com/terms-of-use"target="_blank">Terms of Use</a></li>
                    <li className="list17"><a href="https://www.farefirst.com/privacy-policy"target="_blank">Privacy Policy</a></li>
                    <li className="list18"><a href="https://www.farefirst.com/cancel-refund"target="_blank">Refund Policy</a></li>
                    <li className="list19"><a href="https://www.farefirst.com/shipping-delivery"target="_blank">Shipping & Delivery Policy</a></li>
                </ul>
            </nav>
        </div>

    {/*-----------------------------------------------Footer--------------------------------------------*/}
        <div className="last">
            <span className="lastspan">
                <p className="lastpara">© 2018-2025 Amahop Technologies Pvt. Ltd. All rights reserved.</p>
               <span className="icons">
                <a href="https://www.instagram.com/farefirst/"target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/farefirst"target="_blank"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.youtube.com/channel/UC6Ayzt1JslezukCej32m4PA"target="_blank"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://www.facebook.com/FareFirst.Official"target="_blank"><i className="fa-brands fa-facebook"></i></a>
               </span>
            </span>       
        </div>
    </div>
    </div>
    )
}


export default Footer;