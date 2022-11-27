import React from 'react'

export default function Alert(props) {
    const Capitalize = (word)=>{
        let lower = word.toUpperCase();
        return lower.charAt(0) + word.slice(1) + ':';
    }
  return (
        <div className='container mb-2' style={{height:'60px'}}>
            {props.alert && <div className={`alert alert-${props.alert.typ}`} role="alert">
                <strong>{Capitalize(props.alert.typ)}</strong> {props.alert.msg}
            </div>}
        </div>
  )
}
