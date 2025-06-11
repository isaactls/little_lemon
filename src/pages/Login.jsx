import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError('Invalid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password) {
      setPasswordError('Password cannot be empty.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // In a real app, proceed with login here
      console.log('Form is valid. Attempting login...');
    } else {
      console.log('Form is invalid.');
    }
  };

  return (
    <div style={{ fontFamily: '"Karla", sans-serif', maxWidth: '450px', margin: '60px auto', padding: '40px', backgroundColor: '#EDEFEE', borderRadius: '16px', boxShadow: '0px 8px 20px rgba(0,0,0,0.15)' }}>
      <h2 style={{ textAlign: 'center', color: '#495E59', fontFamily: '"Karla", sans-serif' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#495E59', fontWeight: 'bold', fontFamily: '"Karla", sans-serif' }}>Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            style={{ fontFamily: '"Karla", sans-serif', width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
          {emailError && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px', textAlign: 'left' }}>{emailError}</p>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', color: '#495E59', fontWeight: 'bold', fontFamily: '"Karla", sans-serif' }}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontFamily: '"Karla", sans-serif', width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
          {passwordError && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px', textAlign: 'left' }}>{passwordError}</p>}
        </div>
        <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#F4CE14', color: '#333333', border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', fontFamily: '"Karla", sans-serif', marginTop: '10px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
