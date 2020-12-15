import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { Redirect } from 'react-router-dom';

import './style.css';

import saveToLocalStorage from '../../utils/saveToLocalStorage';
import emailRegex from '../../utils/emailRegex';

const LoginForm: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const onHandleChange = (value: string, setState: CallableFunction) => {
    setState(value);
  };

  const isFormValid = (): boolean => emailRegex.test(email) && password.length > 6;

  const onClick = () => {
    saveToLocalStorage('mealsToken', '1');
    saveToLocalStorage('email', email);
    setRedirect(true);
  };

  if (redirect) return <Redirect to="/recipes" />;

  return (
    <div id="form-content">
      <form id="login-form">
        <h1 id="page-title">Login</h1>
        <div id="email-content">
          <label htmlFor="email-input">
            Email
            <br />
            <input
              type="email"
              id="email-input"
              value={email}
              placeholder="Digite seu e-mail"
              onChange={
              (e: ChangeEvent<HTMLInputElement>) => onHandleChange(e.target.value, setEmail)
            }
            />
          </label>
        </div>
        <div id="password-content">
          <label htmlFor="password-input">
            Senha
            <br />
            <input
              type="password"
              id="password-input"
              value={password}
              placeholder="Digite sua senha"
              onChange={
              (e: ChangeEvent<HTMLInputElement>) => onHandleChange(e.target.value, setPassword)
            }
            />
          </label>
        </div>
        {isFormValid() ? (
          <button type="button" onClick={onClick} id="form-button">Entrar</button>
        ) : (
          <button type="button" disabled id="form-button">Entrar</button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
