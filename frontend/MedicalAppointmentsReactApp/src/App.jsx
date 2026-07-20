import { Form } from './components/Form'
import { Home } from './components/Home'
import { useState } from 'react'

import './App.css'

function App() {

  const [user, setUser] = useState(() => {

    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;

  });

  return (
    <>
    {
      user
        ? <Home user ={user} setUser={setUser} />
        : <Form setUser={setUser} />
    }
      
    </>
  )
}

export default App
