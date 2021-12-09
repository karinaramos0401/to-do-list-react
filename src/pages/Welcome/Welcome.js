import React from 'react'
import './Welcome.css'

import Title from '../../UI/Title'
import Input from '../../UI/Input'
import Witch from '../../images/witch.png'



import { addUser, getUsers } from '../../api/users'
const Welcome = ({user, updateUser, updateShowTodo}) => {
  const initialName = user.name
  const [name,setName] = React.useState(initialName)
  const handleWelcomeSubmit = async (event) => {
    event.preventDefault();

    const users = await getUsers()

    const userFinded = users.find((user) => user.name === name )
      
      if(userFinded){
        updateUser({...userFinded})
      } else {
          const dados = await addUser(name)
          updateUser({...dados})
      }
  
   addUser(name).then(dados => {
     updateUser({
       ...dados
     })
   })
  //função de guardar
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
                Tell me your user and then you can do your magic stuff.
              </span> 
              </Title>
              <form onSubmit={handleWelcomeSubmit}>
                <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your magic user" />
              </form>
              </div>
            </div>           
        </section>
  )
}

export default Welcome; 
