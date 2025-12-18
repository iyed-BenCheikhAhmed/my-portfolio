import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage({ onLogin }) {  //prop 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();     // route-dom vers home
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    setError(''); // efface l'erreur
    setLoading(true);     //désactiver le bouton pendant le traitement.

    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      setLoading(false);
      return;
    }

    
    setTimeout(() => {
      if (email === 'iyed@portfolio.com' && password === '0000') {
        onLogin(); 
        navigate('/home'); // Redirige vers la page d'accueil
      } else {
        setError('Email ou mot de passe incorrect');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="login-icon">🔐</div>
          <h1>Connexion</h1>
          <p>Accédez à votre portfolio</p>
        </div>

        <div className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}    //récupère ce que a écrit
              placeholder="iyed@portfolio.com"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}   //récupère ce que a écrit
              placeholder="Votre mot de passe"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}

          <button 
            onClick={handleSubmit}
            className="btn-login"
            disabled={loading}
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default LoginPage;