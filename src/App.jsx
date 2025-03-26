import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";


function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  </BrowserRouter>
   
  )
}

export default App
