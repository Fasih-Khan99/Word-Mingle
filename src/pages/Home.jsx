import '../App.css'
import Navbar from '../components/Navbar.jsx'
import Center from '../components/Center.jsx'
import React, {useState} from 'react';
function Home(){
    const [darkMode, setDarkMode] = useState(false);
    return(
        <div className={`Full ${darkMode ? 'bg-black' : 'bg-antiquewhite'}`}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Center darkMode={darkMode} />
        </div>

    )
}
export default Home