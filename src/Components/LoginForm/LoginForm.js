import React from 'react';
import "./LoginForm.css";

export const LoginForm = ({ setIsLoggedIn, setUserName, userName }) => {

  localStorage.setItem('isLoggedIn', true);
  localStorage.setItem('userName', userName);

  const login = () => {
    setIsLoggedIn(true)
    setUserName(userName)
  }


  return (
    <h1>
      <form className="loginForm">
        <h2>Вход</h2>
        <div>
          <input type="text" placeholder="Имя пользователя" value={userName} />
        </div>
        <div>
          <input type="password" placeholder="Пароль" />
        </div>
        <div>
          <button onClick={login}>Войти</button>
        </div>
      </form>
    </h1>
  );
}


