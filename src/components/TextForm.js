import React from 'react'

export default function TextForm(props) {
    return (
        <div>
            <h1>{props.headding}</h1>
            <div className="mb-3">   
                <textarea  className="form-control" id="mybox" rows="10"></textarea>
            </div>
            <button className='btn btn-primary'>Convert to Uppercase</button>
        </div>
    )
}
