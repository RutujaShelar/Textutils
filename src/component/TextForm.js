import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState("");

    const handleClick=()=>{
        console.log("onclick clicked" ,text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("change to uppercase!","success")
    }

    const handlelwClick=()=>{
        console.log("onclick clicked" ,text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("change to lowercase!","success")
    }
    const handleClear=()=>{
      setText('');
      props.showAlert("clear all text!","success")
    }

    const handleExtraSpace=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("remove extraa spaces!","success")
    }

    const handleChange=(e)=>{
        console.log("on change");
        setText(e.target.value)
    }
  return <div>
     
<div className="container" style={{color:  props.mode === 'light'?'#042743':'white'}}>
  <h2>{props.heading}</h2>
  <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
  <button className='btn btn-primary mx-1' onClick={handleClick}>change to uppercase</button>
  <button className='btn btn-primary mx-1' onClick={handlelwClick}>change to lowercase</button>
  <button className='btn btn-primary mx-1' onClick={handleClear}>clear text</button>
  <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Handle Extra Space</button>
  {/* <button className='btn btn-primary mx-1' onClick={extractEmails}>extractEmails</button> */}
</div>

<div className='container my-2' style={{color:  props.mode === 'light'?'#042743':'white'}}>
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} time will require</p>
<h3>Preview</h3>
<p>{text.length>0?text:"Write someting in above textbox to preview here"}</p>

</div>

  </div>;
};

export default TextForm;
