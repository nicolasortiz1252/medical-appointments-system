import './Form.css'
import { useState } from 'react'
import { login } from '../services/auth';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export function Form () {

  const navigate = useNavigate();

  const {loginUser} = useAuth();

  const [username, setUsername] = useState ("");
  const [pass, setPass] = useState ("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault()

    if (username === "" || pass === "") {
      setError("Complete los Campos.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const user = await login(username, pass);

      loginUser(user);
      navigate("/home");

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
       value={username}
       onChange={e => setUsername(e.target.value)}
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
