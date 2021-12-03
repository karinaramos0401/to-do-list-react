import React from 'react'

const Welcome = ({name, updateName, updateShowTodo}) => {
  const handleWelcomeSubmit = (event) => {
    event.preventDefault();
    updateShowTodo(true)
  }
  
  return (
    <section>
          <h1>Seja bem-vindo</h1>
          <form onSubmit={handleWelcomeSubmit}>
            <input type="text" value={name} onChange={(event) => updateName(event.target.value)} />
            <button>Iniciar</button>
          </form>
        </section>
  )
}

export default Welcome; 
