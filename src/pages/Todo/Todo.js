import React from 'react' 
import Input from '../../UI/Input'

import Hat from '../../images/witch-hat.png'
import Garbage from '../../images/garbage.png'
import Spider from '../../images/spider.png'


const Todo = ({name}) => {
  const [item, setItem] = React.useState('');
  const [items, setItems] = React.useState([]);
 
  const handleTodoSubmit = (event) => {
    event.preventDefault();

    const newItems = [...items]
    newItems.push(item)

    setItems(newItems)
  }

  const handleDelete = (index) => {
    const newItems = [...items]
    newItems.splice(index,1)

    setItems(newItems)
  }
  return (
        <section className="section">
          <h1 className="title">Your witch things to do, {name}</h1>
          <form className="form" onSubmit={handleTodoSubmit}>
            <div className="field">
              <img className="hat" src={Hat} alt="chapéu de bruxa roxo" />
              <Input className="input" type="text" value={item} onChange={(event) => setItem(event.target.value) } placeholder="Type your magic stuff" />
            </div>
          </form>

          <ul className="list">
            {
              items.map((item, index) => (
                <li key={index} className="item">
                  <input className="checkbox" type="checkbox" id={`item-${index}`} />
                  <label className="checkbox-label" htmlFor={`item-${index}`}>
                  <img className ='spider' src={Spider} alt="aranha" />
                  {item}
                  </label>
                  <button className="button" onClick={() => handleDelete(index)} >
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
