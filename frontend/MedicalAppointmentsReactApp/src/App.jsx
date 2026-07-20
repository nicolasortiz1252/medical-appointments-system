import { Form } from './components/Form'
import { Home } from './components/Home'
import { useAuth } from './context/AuthContext';

import './App.css'

function App() {

  const {user} = useAuth();

  return (
    <>
      {
        user
          ? <Home />
          : <Form />
      }
    </>
  )
}

export default App
