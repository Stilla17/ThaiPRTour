// src/pages/UserLogin.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Registernav from '../Components/Nav/Registernav.jsx';
import FooterList from '../Components/Footer/Footer.jsx';

// API пользователей (MockAPI)
const USER_API_ENDPOINT = 'https://68c141a798c818a69401336f.mockapi.io/register';

const defaultLoginValues = {
  login: '',
  password: '',
};

const UserLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm(defaultLoginValues);

  const navigate = useNavigate();

  // ЛОГИН ПОЛЬЗОВАТЕЛЯ
  const handleUserLogin = async ({ login, password }) => {
    try {
      const response = await fetch(`${USER_API_ENDPOINT}?login=${login}`);
      const users = await response.json();

      // Логин не найден
      if (!response.ok || users.length === 0) {
        setError("login", { type: "manual", message: "Неверный логин или пароль" });
        return;
      }

      const user = users[0];

      // Проверка пароля
      if (user.password !== password) {
        setError("password", { type: "manual", message: "Неверный логин или пароль" });
        return;
      }

      // УСПЕШНЫЙ ВХОД ДЛЯ USER
      console.log(`🎉 Пользователь ${user.login} успешно вошёл`);

      // Сохраняем роль → теперь App.js будет понимать
      localStorage.setItem("role", "user");
      localStorage.setItem("user", user.login);

      navigate('/home'); // УЖЕ ПРАВИЛЬНЫЙ РЕДИРЕКТ

    } catch (err) {
      console.error("Login error:", err);
      setError("login", { type: "manual", message: "Ошибка сервера" });
    }
  };

  return (
    <>
      <Registernav />

      <Form onSubmit={handleSubmit(handleUserLogin)}>
        <StyledWrapper>
          <h2>Вход в аккаунт</h2>

          {/* LOGIN */}
          <div className="inputGroup">
            <input
              type="text"
              autoComplete="off"
              {...register('login', { required: 'Введите логин' })}
              className={errors.login ? 'error' : ''}
              required
            />
            <label>Логин*</label>
            {errors.login && <p className="errorText">{errors.login.message}</p>}
          </div>

          {/* PASSWORD */}
          <div className="inputGroup">
            <input
              type="password"
              autoComplete="off"
              {...register('password', { required: 'Введите пароль' })}
              className={errors.password ? 'error' : ''}
              required
            />
            <label>Пароль*</label>
            {errors.password && <p className="errorText">{errors.password.message}</p>}
          </div>

          {/* SUBMIT */}
          <button type="submit" className="submitBtn primary">Войти</button>

          <p className="registerLink">
            Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
          </p>

          <div className="divider">или</div>

          <button
            type="button"
            className="submitBtn secondary"
            onClick={() => navigate('/login')}
          >
            Войти как Администратор
          </button>
        </StyledWrapper>
      </Form>

      <FooterList />
    </>
  );
};

// ================= СТИЛИ ==================
const Form = styled.form`
  width: 100%;
`;

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  
  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-family: 'Segoe UI', sans-serif;
    animation: fadeIn .4s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .inputGroup {
    position: relative;
    margin: 1.4em auto;
  }

  .inputGroup input {
    width: 100%;
    padding: 0.8em;
    font-size: 100%;
    border: 2px solid #cfcfcf;
    border-radius: 20px;
    background: transparent;
    transition: 0.2s;
  }

  .inputGroup label {
    position: absolute;
    left: 0;
    padding: 0.8em;
    margin-left: 0.5em;
    pointer-events: none;
    color: #777;
    transition: 0.3s;
  }

  .inputGroup input:focus,
  .inputGroup input:valid {
    border-color: #6f62f5;
  }

  .inputGroup input:focus ~ label,
  .inputGroup input:valid ~ label {
    transform: translateY(-50%) scale(0.9);
    margin-left: 1.3em;
    padding: 0.4em;
    background: #fff;
    border-radius: 20px;
  }

  .inputGroup input.error {
    border-color: #ff3b3b;
  }

  .errorText {
    font-size: 12px;
    color: #ff3b3b;
    margin-left: 5px;
    margin-top: 5px;
  }

  .submitBtn {
    width: 100%;
    padding: 12px 30px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-size: 17px;
    margin-top: 15px;
  }

  .submitBtn.primary {
    background: #FE8505;
    color: #fff;
  }

  .submitBtn.secondary {
    background: #f4f4f4;
    color: #333;
    border: 1px solid #ccc;
  }

  .registerLink {
    text-align: center;
    margin-top: 5px;
    font-size: 14px;
  }

  .registerLink a {
    color: #6f62f5;
    font-weight: bold;
    text-decoration: none;
  }

  .divider {
    text-align: center;
    color: #aaa;
    margin: 15px 0;
    position: relative;
  }

  .divider:before,
  .divider:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background: #ddd;
  }

  .divider:before { left: 0; }
  .divider:after { right: 0; }
`;

export default UserLogin;
