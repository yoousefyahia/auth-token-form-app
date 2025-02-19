import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // التحقق من التوكين وتوجيه المستخدم إذا كان مسجّل دخول
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = 'your_secure_token'; 
    localStorage.setItem('token', token); 
    dispatch(login({ email })); 
    alert('تم تسجيل الدخول بنجاح!'); 
    navigate('/'); 
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">تسجيل الدخول</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto border p-4 rounded">
        <div className="mb-3">
          <label className="form-label">البريد الإلكتروني</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">كلمة المرور</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-success w-100">تسجيل الدخول</button>
      </form>
    </div>
  );
}

export default Login;
