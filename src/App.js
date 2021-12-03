import React from 'react';

import Todo from './pages/Todo'
import Welcome from './pages/Welcome';


import './App.css';

function App() {
  const [name, setName] = React.useState('');
  const [showTodo, setShowTodo] = React.useState(false);
  
  
  return (
    <>
    
      {
        !showTodo &&
        <Welcome
        name={name}
        updateName={setName}
        updateShowTodo={setShowTodo}
        />
      }
      
      {
        showTodo &&
        <Todo name={name} />
        
      }
      
    </>
  );
}

export default App;
