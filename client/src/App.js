import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import YourCars from "./pages/YourCars.jsx";
import HomePage from "./pages/HomePage.jsx";
import YourTrip from "./pages/YourTrip.jsx";
import "./styles/global.css";


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<HomePage />} />
         <Route path="/carlist" element={<YourCars />} />
        <Route
          path="/trip/*"
          element={<YourTrip />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
