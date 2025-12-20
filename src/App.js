import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Import des composants
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import des pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';

// Import du CSS global
import './App.css';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Skip scroll to top only for projects list page
    if (pathname !== '/projects') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Navbar />

        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Page 404 */}
          <Route 
            path="*" 
            element={
              <div style={{ textAlign: 'center', padding: '5rem' }}>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
              </div>
            } 
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;