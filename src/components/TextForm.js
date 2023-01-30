import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value);
    }
    const [text, setText] = useState('Entre the text here');
    return (
        <>
            <div className='container'>
                <h1>{props.headding}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} placeholder="Type here" id="mybox" rows="10"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to Lowercase</button>
            </div>
            <div className='container my-3'>
                <h1>You text summary</h1>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
