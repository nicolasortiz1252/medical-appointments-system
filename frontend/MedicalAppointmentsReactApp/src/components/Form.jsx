import './Form.css'
import { useState } from 'react'
import { login } from '../services/auth';
import { useAuth } from '../context/AuthContext';


export function Form () {

  const {loginUser} = useAuth();

  const [name, setName] = useState ("");
  const [pass, setPass] = useState ("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault()

    if (name === "" || pass === "") {
      setError("Complete los Campos.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const user = await login(name, pass);

      loginUser(user);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
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
      <button disabled={loading}>
        {loading ? "Ingresando" : "Iniciar Sesion"}
      </button> 
      </form>
      {error && <p className='error'>{error} </p>}
    </section>
  )
}
