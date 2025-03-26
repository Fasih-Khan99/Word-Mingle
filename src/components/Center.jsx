import React, {useState, useRef} from 'react'
function Center({ darkMode }){

    const [comment, setComment] = useState("");
    const textAreaRef = useRef(null); // Reference for textarea
    const [aiTextPercentage, setAiTextPercentage] = useState(null); // AI text detection result

    function handleUpperCase(){
        let newText = comment.toUpperCase();
        setComment(newText);
    }

    function handleLowerCase(){
        let newText = comment.toLowerCase();
        setComment(newText);
    }

    function clearText(){
       setComment("");     //null or empty the comment
    }

    function copyText(){
        if (textAreaRef.current) {
            textAreaRef.current.select();  //Select text inside textarea
            navigator.clipboard.writeText(textAreaRef.current.value)   //Copy text
                .then(() => alert("Text copied!"))
                .catch(() => alert("Failed to copy text."));
        }
     }

     function detectAiText() {
        if (comment.trim() === "") {
          setAiTextPercentage(null);    //If comment = null, then AI text = null
          return;
        }

        // Simple AI text detection heuristic (you can replace this with an API call)
        const aiKeywords = [
          "moreover",
          "furthermore",
          "hence",
          "in conclusion",
          "therefore",
          "consequently",
          "elaborate",
          "highly sophisticated",
          "meticulously",
          "plethora",
          "subsequently",
          "utilize",
          "paradigm",
        ];
  
        //This counts how many times AI-related words appear in the comment.
        let aiWordCount = comment
        .toLowerCase()
        .split(/\s+/)
        .filter((word) => aiKeywords.includes(word)).length;
  
        let totalWords = comment.trim().split(/\s+/).length;  //Total number of words in the user's comment.
        let percentage = totalWords > 0 ? ((aiWordCount / totalWords) * 100).toFixed(2) : 0;  //calculating AI%
  
        setAiTextPercentage(percentage);
      }
    
    return(
        <div className={`w-full h-full p-5 ${darkMode ? "bg-black" : "bg-gray-50"}`}>
            <h1 className={`text-xl text-left ml-20 font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Enter the text to analyze below</h1>
            <textarea
              ref={textAreaRef} // Attach the ref
            className="w-300 h-60 p-2 text-gray-800 text-left ml-20 mt-5 border-gray-500 border-2 bg-white"
                rows="5"
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
            ></textarea>
            <br/>
            <button onClick={handleUpperCase} className="rounded-md border-transparent bg-indigo-600 p-2 text-center font-medium text-white hover:bg-indigo-700 ml-20 mr-5 mt-2">Convert to Uppercase</button>
            <button onClick={handleLowerCase} className="rounded-md border-transparent bg-indigo-600 p-2 text-center font-medium text-white hover:bg-indigo-700 mr-5 mt-2">Convert to Lowercase</button>
            <button onClick={clearText} className="rounded-md border-transparent bg-indigo-600 p-2 text-center font-medium text-white hover:bg-indigo-700 mr-5 mt-2">Clear Text</button>
            <button onClick={copyText} className="rounded-md border-transparent bg-indigo-600 p-2 text-center font-medium text-white hover:bg-indigo-700 mr-5 mt-2">Copy Text</button>
            <button onClick={detectAiText} className="rounded-md border-transparent bg-indigo-600 p-2 text-center font-medium text-white hover:bg-indigo-700 mr-5 mt-2">AI Text Detector</button>
            <br/>
            <p className={`text-3xl text-left ml-20 font-bold mt-3 ${darkMode ? "text-white" : "text-gray-800"}`}>Your text summary</p>
            <p className={`text-xl text-left ml-20 font-bold mt-3 ${darkMode ? "text-white" : "text-gray-800"}`}>
                {comment==="" ? 0 : comment.trim().split(/\s+/).length} words, {comment.length} characters
            </p>
            <p className={`text-xl text-left ml-20 font-bold mt-3 ${darkMode ? "text-white" : "text-gray-800"}`}>
                {comment==="" ? 0 : (0.008 * comment.trim().split(/\s+/).length).toFixed(2)} minutes to read all text
            </p>    {/*on avg it takes 0.008 minutes to read 1 word */}

            {aiTextPercentage !== null && (
            <p className={`text-xl text-left ml-20 font-bold mt-3 ${darkMode ? "text-white" : "text-gray-800"}`}>
                Estimated AI-generated text: {aiTextPercentage}%
            </p>
            )}
        </div>

    )
}
export default Center
