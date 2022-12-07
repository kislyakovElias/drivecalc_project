import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import CarInfo from "./components/carInfo/CarInfo.jsx";
import YourCars from "./pages/YourCars.jsx";
import HomePage from "./pages/HomePage.jsx";
import YourTrip from "./pages/YourTrip.jsx";

const BACK_END = "http://localhost:8080";
// const BACK_END = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await axios.get(`${BACK_END}/api/data`);
      setDataset(data);
    };

    fetchStudents();
  }, []);

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
