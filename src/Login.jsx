import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import './Login.css'; 
import { FiUser, FiLock } from 'react-icons/fi'; // Importez les icônes FiUser (utilisateur) et FiLock (cadenas) depuis react-icons/fi

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Ici, vous pouvez ajouter la logique de validation du formulaire de connexion
    // et gérer l'authentification avant de rediriger vers la page "test".
    // Pour l'instant, nous redirigeons directement vers "/test".
    navigate("/test");
  };

  return (
    <div className='login'>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <div className="input-with-icon">
              <FiUser className="input-icon" />
              <input className='email' type="text" id="username" name="username" placeholder="Enter your email" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <div className="input-with-icon">
              <FiLock className="input-icon" />
              <input type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
          </div>
          <button className='buttonlogin' type="button" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
