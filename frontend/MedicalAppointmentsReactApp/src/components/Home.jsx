import { useAuth } from "../context/AuthContext";
import  "./Home.css";


export function Home(){

  const {user, logout} = useAuth();


  const handleLogout = () => {
    logout();

  }
  return(
    <div className="home-container">

      <h1>Bienvenido, {user.firstName} </h1>

      <button 
        onClick={logout} 
        className="btn-logout">
          Cerrar Sesion
      </button>
    </div>
  );
}