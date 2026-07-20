import  "./Home.css";
export function Home({user, setUser }){

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);

  }
  return(
    <div className="home-container">

      <h1>Bienvenido, {user.name} </h1>

      <button 
        onClick={handleLogout} 
        className="btn-logout">
          Cerrar Sesion
      </button>
    </div>
  );
}