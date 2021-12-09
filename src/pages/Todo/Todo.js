import React from 'react' 
import Input from '../../UI/Input'
import {getItems} from '../../api/items'

import Hat from '../../images/witch-hat.png'
import Garbage from '../../images/garbage.png'
import Spider from '../../images/spider.png'


const Todo = ({user}) => {
  const [item, setItem] = React.useState('');
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    getItems(user.id).then(dados => {
      if(dados) setItems([...items, ...dados])
    })
  }, [])
 
  const handleTodoSubmit = (event) => {
    event.preventDefault();

    const newItems = [...items]
    newItems.push(item)

    setItems(newItems)
  }

  const handleDelete = (id) => {
    const newItems = [...items]
    const index = newItems.findIndex(newItem => newItem.id === id)
    newItems.splice(index,1)

    setItems(newItems)
  }
  return (
        <section className="section">
          <h1 className="title">Your witch things to do, {user.name}</h1>
          <form className="form" onSubmit={handleTodoSubmit}>
            <div className="field">
              <img className="hat" src={Hat} alt="chapéu de bruxa roxo" />
              <Input className="input" type="text" value={item} onChange={(event) => setItem(event.target.value) } placeholder="Type your magic stuff" />
            </div>
          </form>

          <ul className="list">
            {
              items.map((item) => (
                <li key={item.id} className="item">
                  <input className="checkbox" type="checkbox" id={`item-${item.id}`} />
                  <label className="checkbox-label" htmlFor={`item-${item.id}`}>
                  <img className ='spider' src={Spider} alt="aranha" />
                  {item.content}
                  </label>
                  <button className="button" onClick={() => handleDelete(item.id)} >
                    <img className="garbage" src={Garbage} alt="lixeira" />
                  </button>
                </li>
              ))
            }
            
          </ul>
        </section>
  )
}

export default Todo
