import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../Components/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loginHandler = async () => {
    const role = await auth.login(username, password);
    if (role === "superadmin") navigate("/superadmin");
    else if (role === "admin") navigate("/admin");
    else setError("Неверный логин или пароль");
  };

  return (
    <div>
      <h2>Вход</h2>
      <input placeholder="Логин" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Пароль" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={loginHandler}>Войти</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
