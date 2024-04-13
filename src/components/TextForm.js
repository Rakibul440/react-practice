import React,{useState} from 'react'
import PropTypes from 'prop-types'
 
export default function TextForm(props) {
    const [text,setText] = useState("Enter text here");
    //Function to uppercase the text
    const handleUppercase = ()=>{
        console.log("Uppercse button was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    //Function to lowercase the text
    const handleLowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    //Function to text to speech
    const handleSpeech = ()=>{
        let synth = window.speechSynthesis;
        let voice = new SpeechSynthesisUtterance(text);
        synth.speak(voice);
    }
    //Tracking change
    const changeUp = (e)=>{
        console.log("Clicked");
        // console.log(e.target.value);
        setText(e.target.value);
    }
   return (
       <>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" data-bs-theme={`${props.mode}`} value={text} onChange={changeUp} id="myBox" rows="8"></textarea>
            {/*oneChange function helps to find the change on textarea*/}
            <button className="btn btn-primary my-2" onClick={handleUppercase}>Covert text to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowercase}>Convert Lowercase</button>
            <button className="btn btn-success" onClick={handleSpeech}>Text-to-Speech</button>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Takes {0.008 * text.split(" ").length} minutes to Read</p>
            <h2>Preview</h2>
            <p>{text===""?"Enter text to show":text}</p>
        </div>
       </>
   )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading : 'Add a heading'
}

