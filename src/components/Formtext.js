import React, { useState } from 'react'
import '../css/all.css'

export default function Formtext(props) {
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCamelCase = () => {
        let camelCaseText = '';
        let capitalizeNext = true;
        for (let i = 0; i < text.length; i++) {
            const char = text.charAt(i);

            if (char === ' ') {
                // Preserve the space
                camelCaseText += char;
                capitalizeNext = true;
            } else {
                if (capitalizeNext) {
                    camelCaseText += char.toUpperCase();
                    capitalizeNext = false;
                } else {
                    camelCaseText += char.toLowerCase();
                }
            }
        }

        setText(camelCaseText);
    }


    const handleClear = () =>{
        setText("");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Example Text');
    return (
        <>
            <div className="flex-head" style={{color: props.mode==="dark"?"white":"Black"}}>
            <h3 className='txtInp'>Enter Text Here : </h3>
            <button onClick={handleClear} type="button" className="btn btn-danger">Clear</button>
            </div>
            <div className="mb-3">
                <textarea className="form-control" style={{color: props.mode==="dark"?"white":"Black", background: props.mode==="dark"?"#2d3538":"white"}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                <div className="flex">
                    <button onClick={handleUpperCase} type="button" className="btn btn-success">Convert To UpperCase</button>
                    <button onClick={handleCamelCase} type="button" className="btn btn-success">Convert To CamelCase</button>
                    <button onClick={handleLowerCase} type="button" className="btn btn-success">Convert To LowerCase</button>
                </div>

            </div>
            <div className="flex" style={{color: props.mode==="dark"?"white":"Black"}}>

                <div className="mb-3 left">
                    <h4 className="summary">Text Summary : </h4>
                    <div className="span">
                        <span>No. of Words : {text.split(" ").length}</span><br />
                        <span>No. of Characters : {text.length}</span><br />
                        <span>No. of Minute to read : {0.008*text.split(" ").length} mins</span>
                    </div>
                </div>
                <div className="mb-3 right">
                    <h4 className="preview">Preview : </h4>
                    <p>{text}</p>
                </div>
            </div>

        </>
    );
}
