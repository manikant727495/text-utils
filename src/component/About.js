import React from 'react'

export default function About(props) {
  let mystyle = 
    {
       backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
       color: props.mode === 'dark' ? 'white' : '#042743'
    }
  return (
    <>
    <div className='container my-3'style={mystyle} >
        <h1>About us</h1>
        <div className="accordion" id="accordionExample" style={mystyle}>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                    Analyze Your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count,characher or read extra spaces.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                    Free to Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and charaters. Thus it is suitable for writing text with word/character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter software words in any web brwoser such as chrome firefox,safari,Edge,Opera.it suits to count characters in facebook,blog,books,excel document, pdf document, essays,etc.
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

