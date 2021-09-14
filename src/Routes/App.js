import React from 'react'
import {TodoProvider} from '../hooks/useContext'
import AppUI from '../Routes/AppUI'

function App(props) {

  return (

    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  );
}

export default App;
