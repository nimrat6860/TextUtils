import React, { useState } from 'react'
export default function About(props) {
  let style={
    color:props.mode=='dark'?'white':'#042743',
    backgroundColor:props.mode=='dark'?'rgb(36 74 104)':'white'
  }
  return (
   <div className="container">
    <h1 className="my-3" style={{color:props.mode=='dark'?'white':'#042743'}}>About Us</h1>
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            style={style}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
             <strong>Analyze your text</strong>
          </button>
         
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={style}>
            TextUtils give you a way to analyze your text quickly and effectively.Be it word count or character count.   
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            style={style}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <strong>Free to use</strong>     
             </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Textutils is a free character count tool that provide instant character count and word count
            statistics for a given text.TextUtils report the number of words and characters.Thus it is suitable for writing the text with word/character limit.  
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            style={style}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
       <strong>Browser compatible</strong>   
       </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            This word count software works in any web browser such as Chrome ,Firefox,Interenet explorer,
            safari,opera.It suits to count character in facebook,blogs,excel document,pdf document,essays etc

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
