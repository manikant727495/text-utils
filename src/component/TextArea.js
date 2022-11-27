import React, { useState } from 'react'

export default function TextArea(props) {
    const handleUpClick=(event)=>{
       let value = text.toUpperCase()
        setText(value);
        props.showAlert('success','Converted to Upper Case');
    }

    const handleLoClick=(event)=>{
      let value = text.toLocaleLowerCase()
      setText(value);
      props.showAlert('success','Converted to Lower Case');
    }

    const handleOnChange=(event)=>{
      setText(event.target.value);
    }

    const handleClearText=(event)=>{
      let value = "";
      setText(value);
    }

    const handleCopyText=()=>{
      // let text = document.getElementById("textArea");
      // text.select();
      navigator.clipboard.writeText(text);
      props.showAlert('success','Text copied successfully');
    }

    const handleExtraSpaces=()=>{
      let newText = text.replace(/\s+/g,' ').trim();
      setText(newText);
      props.showAlert('success','Removed Extra Spaces');
    }

    const [text,setText] = useState('');
    return (
      <>
      <div className='container' style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
          <h3>{props.heading}</h3>
          <div className='mb-3'>
              <textarea className="form-control" value={text} onChange={handleOnChange} id="textArea" rows="8" style={{backgroundColor:props.mode === 'dark'?'#042743':'white',color:props.mode === 'dark' ? 'white':'black'}}></textarea>
          </div>
          <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
          <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleLoClick}> Convert to Lower Case</button>
          <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleClearText}> Clear Text</button>
          <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleCopyText}> Copy Text</button>
          <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}> Remove Extra Space</button>
      </div>
      <div className='container' style = {{color:props.mode === 'dark' ? 'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(' ').filter((element)=>{ return element.length !== 0}).length} words {text.length} Letters</p>
        <p>{text.split(' ').filter((element)=>{return element.length !== 0}).length*0.08} mins read</p>
        <h3>preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
      </>
    );
}
