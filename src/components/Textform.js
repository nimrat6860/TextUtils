import React ,{useState} from 'react'
export default function Textform(props) {
  const handleupclick = ()=>
  {
    let newtext=text.toUpperCase();
    setText(newtext)
  }
  const handlelowclick = ()=>
    {
      let newtext=text.toLowerCase();
      setText(newtext)
    }
  const handleclr=()=>
  {
    let newtext='';
    setText(newtext)
  }
  const handleonchange= (event)=>
  {
    setText(event.target.value)
  }
  const[text,setText]=useState('');
  return (
    <>
  <div className="container my-2 mx-10" style={{color:props.mode=='dark'?'white':'#042743'}}><h1>{props.heading}</h1></div>
    <div className="container" style={{color:props.mode=='dark'?'white':'#042743'}}>
    <div className="container"></div><h1>{props.title}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode=='dark'?'#13466e':'white',color:props.mode=='dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="9"></textarea>
    </div>
    <buttons className="btn btn-primary mx-2 my-2"  onClick={handleupclick} style={{color:props.mode=='dark'?'white':'black'}}>Convert to Upper Case</buttons>
    <buttons className="btn btn-primary mx-2 my-2" onClick={handlelowclick} style={{color:props.mode=='dark'?'white':'black'}}>Convert to lower case</buttons>
    <buttons className="btn btn-primary mx-2 my-2" onClick={handleclr} style={{color:props.mode=='dark'?'white':'black'}}>Clear Text</buttons>
    </div>
<div className="container my-5" style={{color:props.mode=='dark'?'white':'#042743'}}>
<h1>Your text summary</h1>
<p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters </p>
<p>{0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} <b>Minutes to read</b></p>
<h2>Preview</h2>
<p>{text.length>0?text:'enter something to preview here'}</p>
</div>
</>

  )
}
