import React from 'react';

import Todo from './pages/Todo'
import Welcome from './pages/Welcome';


import './App.css';

function App() {
  const [user, setUser] = React.useState({});
  const [showTodo, setShowTodo] = React.useState(false);
  
  
  return (
    <>
    
      {
        !showTodo &&
        <Welcome
        user={user}
        updateUser={setUser}
        updateShowTodo={setShowTodo}
        />
      }
      
      {
        showTodo &&
        <Todo user={user} />
        
      }
      
    </>
  );
}

export default App;
