import React from 'react'
import './Input.css'

const Input = ({type ='text', value, onChange, placeholder}) => (
  
    <input className="input" type={type} value={value} onChange={onChange} placeholder={placeholder} />
   
)

export default Input; 

