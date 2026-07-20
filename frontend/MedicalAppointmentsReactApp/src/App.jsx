import { useAuth } from './context/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';


import './App.css'

function App() {

  const {user} = useAuth();

  return (
    <Routes>

      <Route path='/' 
        element={
          <Navigate to={user ? "/home" : "/login" } replace/>
        } 
      />
      
      <Route path='/login' 
        element={
          user
            ? <Navigate to="/home" replace/>
            : <LoginPage />
        } 
      />
      
      <Route path='/home' 
        element={
          user
            ? <HomePage />
            : <Navigate to="/login" replace />
        } 
      />
    
    </Routes>
  )
}

export default App
