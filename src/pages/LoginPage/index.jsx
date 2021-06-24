import { useRef, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import useValidation from '../../hooks/useValidation.js';
import useFormValidator from '../../hooks/useFormValidator.js';

import Cabecalho from '../../components/Cabecalho';
import Widget from '../../components/Widget';
import NotificacaoContext from '../../contexts/NotificationContext';
import LoginService from '../../services/LoginService';
import './loginPage.css';

function LoginPage() {
  const inputLogin = useRef();
  const inputSenha = useRef();
  const history = useHistory();
  const notificacao = useContext(NotificacaoContext);

  const { isEmpty } = useValidation();
  const { errors, isFormValid, validate } = useFormValidator({
    login: isEmpty('Login é obrigatório!'),
    senha: isEmpty('Senha é obrigatório!'),
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    let login = inputLogin.current.value.trim();
    let senha = inputSenha.current.value.trim();

    // if (!login || !senha) {
    //   alert('Por favor, preencha os campos corretamente');
    // }

    try {
      if (login || senha) {
        await LoginService.autenticar(login, senha);
        notificacao('Login realizado com sucesso!');
        history.push('/');
      }
    } catch (erro) {
      // alert(erro.message);
      notificacao(erro.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Twittelum - Login</title>
      </Helmet>

      <Cabecalho />
      <div className="loginPage">
        <div className="container">
          <Widget>
            <h2 className="loginPage__title">Seja bem vindo!</h2>
            <form
              onSubmit={handleLoginSubmit}
              className="loginPage__form"
              action="/"
            >
              <div className="loginPage__inputWrap">
                <label className="loginPage__label" htmlFor="login">
                  Login
                </label>
                <input
                  ref={inputLogin}
                  className="loginPage__input"
                  type="text"
                  id="login"
                  name="login"
                  onBlur={validate}
                />
                {errors.login && (
                  <span className="loginPage__error">{errors.login}</span>
                )}
              </div>
              <div className="loginPage__inputWrap">
                <label className="loginPage__label" htmlFor="senha">
                  Senha
                </label>
                <input
                  ref={inputSenha}
                  className="loginPage__input"
                  type="password"
                  id="senha"
                  name="senha"
                  onBlur={validate}
                />
                {errors.senha && (
                  <span className="loginPage__error">{errors.senha}</span>
                )}
              </div>
              <div className="loginPage__inputWrap">
                <button
                  disabled={!isFormValid}
                  className="loginPage__btnLogin"
                  type="submit"
                >
                  Logar
                </button>
              </div>
            </form>
          </Widget>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
