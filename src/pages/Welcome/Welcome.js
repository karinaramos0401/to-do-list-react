import React from 'react'
import './Welcome.css'

import Title from '../../UI/Title'
import Input from '../../UI/Input'
import Witch from '../../images/witch.png'


const Welcome = ({name, updateName, updateShowTodo}) => {
  const handleWelcomeSubmit = (event) => {
    event.preventDefault();
    updateShowTodo(true)
  }
  
  return (
    <section>
          <div className="container">
            <div className="welcome">
              <img className="witch" src={Witch} alt="uma bruxinha em cima da vassoura" /> 
              <Title>
              Hello, Witch!
              <span className="span">
                Tell me your name and then you can do your magic stuff.
              </span> 
              </Title>
              <form onSubmit={handleWelcomeSubmit}>
                <Input className="input" value={name} onChange={(event) => updateName(event.target.value)} placeholder="Type your magic name" />
              </form>
              </div>
            </div>           
        </section>
  )
}

export default Welcome; 
