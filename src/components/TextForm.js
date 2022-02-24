import React,{useState} from 'react'



export default function TextForm(props) {

const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext)
}

const handleOnClick = (event)=>{
    console.log("On Change");
    setText(event.target.value)
}

const handleClearText = (event)=>{
    
    let newtext = "";
    setText(newtext)
}

const handleExtraSpaces = () => {

  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}

const handleSentenceCase = () => 
{
    let newStr = text.replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, s => s.replace(/([a-z])/,s => s.toUpperCase()));
   

    setText(newStr)
}

const [text, setText] = useState('');
  

return (
  
   
     
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
   <h2>{props.heading} </h2> 
 
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnClick} id="mytext" rows="8"></textarea>

<button className="btn btn-primary mx-1 my=3" onClick={handleUpClick}>Convert to Uppercase</button>

<button className="btn btn-primary mx-1 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

<button className="btn btn-primary mx-1 my-3" onClick={handleSentenceCase}>Convert to Sentencecase</button>

<button className="btn btn-primary mx-1 my-3" onClick={handleClearText}>Clear Text</button>


    
<div className="container my-3">
<h2>Your Text Summary:</h2>
<p> {text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes to read</p>
<h3>Preview</h3>
<p>{text.length>0?text:"Enter text in Textbox above to preview something here"}</p>
</div>

</div>
    
  )
}
