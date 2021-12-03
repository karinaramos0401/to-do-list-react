import React from 'react'

import Title from '../../UI/Title'
import Input from '../../UI/Input'

const Welcome = ({name, updateName, updateShowTodo}) => {
  const handleWelcomeSubmit = (event) => {
    event.preventDefault();
    updateShowTodo(true)
  }
  
  return (
    <section>
          <Title>
            Seja bem vindo
          </Title>
          <form onSubmit={handleWelcomeSubmit}>
            <Input value={name} onChange={(event) => updateName(event.target.value)} />

            <button>Iniciar</button>
          </form>
        </section>
  )
}

export default Welcome; 
