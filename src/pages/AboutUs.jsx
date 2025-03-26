import '../App.css'
import Navbar from '../components/Navbar.jsx'
import About from '../components/About.jsx'
import React, {useState} from 'react';
function AboutUs(){
    const [darkMode, setDarkMode] = useState(false);
    return(
        <div className={`Full ${darkMode ? 'bg-black' : 'bg-antiquewhite'}`}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <About darkMode={darkMode} />
        </div>
    )
}
export default AboutUs