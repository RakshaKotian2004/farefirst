import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Middle from "./Components/Middle";
import Footer from "./Components/Footer";
import Result from "./Components/Result";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={
              <>
                <Middle />
                <Footer />
              </>
           }/>
          <Route path="/results" element={<Result />} />
        </Routes>
    </Router>
  );
}

export default App;
