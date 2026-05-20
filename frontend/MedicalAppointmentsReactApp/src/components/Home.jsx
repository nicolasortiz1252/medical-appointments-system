export function Home({ setUser }){

  const handleLogout = () => {
    setUser([]);

  }
  return(
    <div className="home-container">
      <h1>Bienvenido</h1>
      <button onClick={handleLogout} className="btn-logout">Cerrar Sesion</button>
    </div>
  )
}