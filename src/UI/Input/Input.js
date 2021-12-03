import React from 'react'

const Input = ({type ='text', value, onChange}) => (
  
    <input type={type} value={value} onChange={onChange} />
   
)

export default Input; 

