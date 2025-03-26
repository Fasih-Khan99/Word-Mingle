function About({ darkMode }){
    return(
        <div className={`w-full h-full p-5 ${darkMode ? "bg-black" : "bg-gray-50"}`}>
            <p className={`text-3xl text-center font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>A world where anyone can write without limit while avoiding plagiarism</p>
            <br/>
            <div className={`w-300 ml-30 mt-10 h-100 p-5 border-2 ${darkMode ? "bg-black  border-white" : "bg-gray-50  border-black"}`}>
                <p className={`text-3xl text-left ml-20 font-bold mt-3 ${darkMode ? "text-white" : "text-gray-800"}`}>About WordMingle</p>
                <br/>
                <p className={`mr-15 text-justify text-2xl ml-20 font-bold mt-3 ${darkMode ? "text-white" : "text-gray-800"}`}> Welcome to WordsMingle, the ultimate text companion built by TeamAkf! Whether you're drafting notes, 
                    refining your words, or experimenting with text transformations, WordsMingle has you covered. With
                    seamless features like case conversion, word and character count, text copying, clearing, and AI-powered
                    text detection, you can write and edit with ease—without limits!<br/>
                    Join us and let your words mingle, transform, and shine! 🚀
                </p>
            </div>
        </div>

    )
}
export default About