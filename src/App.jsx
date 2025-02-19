import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LandingPage from './pages/land/LandingPage';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // alert('يجب تسجيل الدخول أولاً');
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute><LandingPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;
