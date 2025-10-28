import React from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Header from "./Components/Header";
import Middle from "./Components/Middle";
import Footer from "./Components/Footer";
import Result from "./Components/Result";
import Booking from "./Components/Booking";

function App() {
  return (
    <Router>
      <Main/>
    </Router>
  );
}

function Main() {
  const location=useLocation();
  const hideHeaderFooter=location.pathname==="/thankyou";

  return (
    <>
      {!hideHeaderFooter && <Header/>}
      <Routes>
        <Route path="/" element={<Middle/>}/>
        <Route path="/results" element={<Result/>}/>
        <Route path="/thankyou" element={<Booking/>}/>
      </Routes>
      {!hideHeaderFooter && <Footer/>}
    </>
  );
}

export default App;
