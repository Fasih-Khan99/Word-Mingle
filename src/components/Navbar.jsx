import {Link} from "react-router-dom";
import PropTypes from "prop-types";
function Navbar({ darkMode, setDarkMode }){
  
    return(
        <div className={`w-full h-14 p-2 flex items-center justify-between ${darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"}`}>
            <div className="w-50 h-inherit bg-transparent float-left ">
                <p className="text-2xl text-left ml-5 font-bold">WordMingle</p>
            </div>
            <div className="w-200 h-inherit bg-transparent float-left ">
            <Link to="/" className={`ml-10 text-xl font-bold ${darkMode ? "text-white" : "text-gray-700"}`}>Home</Link>
            <Link to="/aboutus" className={`ml-10 text-xl font-bold mr-10 ${darkMode ? "text-white" : "text-gray-700"}`}>About Us</Link>
            </div>

            <div className="w-150 h-inherit bg-transparent float-right ml-15">
                <label className="inline-flex items-center cursor-pointer ml-80">
                    <input 
                        type="checkbox" 
                        className="sr-only peer"  
                        checked={darkMode} 
                        onChange={() => setDarkMode(!darkMode)} 
                    />
                      <div className="relative w-14 h-7 bg-gray-300 rounded-full shadow-inner">
                        <div className={`absolute left-1 top-1 w-5 h-5 bg-blue-500 rounded-full shadow-md transform transition-all duration-300 ${darkMode ? "translate-x-7" : ""}`}></div>
                    </div>
                    <span className="ml-3 text-lg">{darkMode ? "Dark Mode" : "Light Mode"}</span>
                </label>

            </div>

           

        </div>

    )
}
// PropTypes for validation
Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
};

export default Navbar
