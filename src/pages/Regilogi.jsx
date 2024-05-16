import React, { useState } from 'react';
import './Regilogi.css'; 
import ava from './avatar.svg';
import fon from './bg.svg';

function Login() {
  // Состояния для значений полей ввода
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Обработчики изменения значения полей ввода
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="container">
      <div className="img">
        <img src={fon} alt="Background" />
      </div>
      <div className="login-content">
        <form action="index.html">
          <img src={ava} alt="Avatar" />
          <h3 className="title">Вход</h3>
          <div className={`input-div one ${phone ? 'focus' : ''}`}>
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="div">
              <h5 style={{ display: phone ? 'none' : 'block' }}>Телефон</h5>
              <input type="text" className="input" value={phone} onChange={handlePhoneChange} />
            </div>
          </div>
          <div className={`input-div pass ${password ? 'focus' : ''}`}>
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="div">
              <h5 style={{ display: password ? 'none' : 'block' }}>Пароль</h5>
              <input type="password" className="input" value={password} onChange={handlePasswordChange} />
            </div>
          </div>
          <a href="#">Забыли пароль?</a>
          <div style={{ marginTop: '10px', background: '#38d39f', borderRadius: '32.5px'}}>
            <input type="submit" className="btn" value="Войти" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;