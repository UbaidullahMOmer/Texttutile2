import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("OnChange");
        setText(event.target.value);
    }
    const [text, setText] = useState('Entre the text here');
    return (
        <div>
            <h1>{props.headding}</h1>
            <div className="mb-3">   
                <textarea  className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="10"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
