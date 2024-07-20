import React, {useState} from 'react'

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("Handle on Change");
    setText(event.target.value);
  }
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked "  , text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  }
  const handleLoClick = () =>{
    // console.log("Uppercase was clicked "  , text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClear = () =>{
    // console.log("Uppercase was clicked "  , text);
    let newText = '';
    setText(newText);
  }

  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const [text,setText] = useState("for example: sarvesh"); //state-text    hook-useState
  // setText("new text");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{background:props.mode==='dark'?'purple':'white',color:props.mode==='dark'?'white':'black',border:'2px solid white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to LOWERCASE.
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClear}>
          Clear TEXT.
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy TEXT.
        </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p><b>{text.split(" ").filter((element)=>{ return element.length!==0}).length}</b> words, {text.length} characters</p>
      <p>{0.008*text.length} minutes</p>
      <h3>Preview</h3>
      <p style={{color: text.length === 0 ? 'red' : '#23FF00'}}>{text.length>0?text:"Enter Something to preview it here"}</p>
    </div>
    </>
  )
}