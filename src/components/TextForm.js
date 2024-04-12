import React,{useState} from 'react'
import PropTypes from 'prop-types'
 
export default function TextForm(props) {
    const [text,setText] = useState("Enter text here");

    const handleUppercase = ()=>{
        console.log("Uppercse button was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const changeUp = (e)=>{
        console.log("Clicked");
        // console.log(e.target.value);
        setText(e.target.value);
    }
   return (
       <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={changeUp} id="myBox" rows="8"></textarea>
            {/*oneChange function helps to find the change on textarea*/}
            <button className="btn btn-primary" onClick={handleUppercase}>Covert text to Uppercase</button>
        </div>
   )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading : 'Add a heading'
}

