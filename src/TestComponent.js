import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TestComponent = () => {
  const hi = '안녕하세요';
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate('/login');
  };

  return (
    <>
      <Link to="/main">메인으로</Link>
      <button onClick={handleClickBtn}>{hi}</button>
    </>
  );
};

export default TestComponent;
