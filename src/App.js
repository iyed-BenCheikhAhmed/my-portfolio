import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import des composants
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import des pages
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';

// Import du CSS global
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <div className="app">
        {/* Afficher la Navbar uniquement si connecté */}
        {isLoggedIn && <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />}

        {/* Définition des routes */}
        <Routes>
          {/* Route de login */}
          <Route 
            path="/login" 
            element={
              isLoggedIn ? <Navigate to="/home" replace /> : <LoginPage onLogin={handleLogin} />
            } 
          />

          {/* Routes protégées (accessibles seulement si connecté) */}
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/projects" 
            element={
              <ProtectedRoute>
                <ProjectsPage />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/project/:id" 
            element={
              <ProtectedRoute>
                <ProjectDetailPage />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/contact" 
            element={
              <ProtectedRoute>
                <ContactPage />
              </ProtectedRoute>
            } 
          />

          {/* Redirection par défaut */}
          <Route 
            path="/" 
            element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />} 
          />

          {/* Page 404 */}
          <Route 
            path="*" 
            element={
              <div style={{ textAlign: 'center', padding: '5rem' }}>
                <h1>404 - Page non trouvée</h1>
                <p>La page que vous cherchez n'existe pas.</p>
              </div>
            } 
          />
        </Routes>

        {/* Afficher le Footer uniquement si connecté */}
        {isLoggedIn && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;