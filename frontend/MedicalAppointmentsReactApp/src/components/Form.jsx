import './Form.css'
import { useState } from 'react'
import { login } from '../services/auth';


export function Form ({ setUser }) {
  const [name, setName] = useState ("");
  const [pass, setPass] = useState ("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) =>{
    e.preventDefault()

    if (name === "" || pass === "") {
      setError(true);
      return;
    }

    setError(false);

    try {
      const user = await login(name, pass);
      setUser(user);
    } catch (error) {
      setError(true);
    }

  }


  return (
    <section>
      <h1>Login</h1>

      <form 
      className='form-container'
      onSubmit={handleSubmit}
      >
       <input 
       type="text" 
       placeholder='Ingresa tu nombre de Usuario'
       value={name}
       onChange={e => setName(e.target.value)}
       /> 

       <input 
       type="password" 
       placeholder='Contraseña...'
       value={pass}
       onChange={e => setPass(e.target.value)}
       /> 
       <button>Iniciar sesion</button> 
      </form>
      {error && <p className='error'>Complete los datos o Verifique sus Credenciales</p>}
    </section>
  )
}
