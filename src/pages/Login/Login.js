import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    loginId: '',
    password: '',
  });
  const isValid =
    inputValue.loginId &&
    inputValue.loginId.includes('@') &&
    inputValue.password &&
    inputValue.password.length >= 5;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleKeydown = e => {
    if (e.code !== 'Enter') return;
    if (!isValid) return;
    navigate('/main');
  };

  return (
    <main className="login-page">
      <section className="inner-container">
        <h1 className="logo">Westargram</h1>
        <form className="login-form">
          <input
            className="login-input"
            name="loginId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={inputValue.loginId}
            onChange={handleInput}
            onKeyDown={handleKeydown}
          />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="비밀번호"
            value={inputValue.password}
            onChange={handleInput}
            onKeyDown={handleKeydown}
          />
          <button className="login-btn" disabled={!isValid}>
            로그인
          </button>
        </form>
        <a className="find-password" href="/">
          비밀번호를 잊으셨나요?
        </a>
      </section>
    </main>
  );
};

export default Login;
