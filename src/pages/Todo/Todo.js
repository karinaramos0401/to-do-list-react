import React from 'react' 

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
    <section>
          <h1>Lista da {name}</h1>
          <form onSubmit={handleTodoSubmit}>
            <input type="text" value={item} onChange={(event) => setItem(event.target.value)} />
          </form>

          <ul>
            {
              items.map((item, index) => (
                <li key={index}>
                  <input type="checkbox" id={`item-${index}`} />
                  <label htmlFor={`item-${index}`}>
                  {item}
                  </label>
                  <button onClick={() => handleDelete(index)} >remover</button>
                </li>
              ))
            }
            
          </ul>
        </section>
  )
}

export default Todo
