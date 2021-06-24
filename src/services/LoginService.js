import { TWITTELUM_API } from '../utils';

class LoginService {
  static async autenticar(login, senha) {
    const dadosLogin = { login, senha };

    const response = await fetch(TWITTELUM_API + '/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(dadosLogin),
    });

    if (!response.ok) {
      const resErroServidor = await response.json();
      const erro = new Error(resErroServidor.message);
      erro.status = response.status;
      throw erro;
    }

    const dadosServidor = await response.json();
    const token = dadosServidor.token;

    if (!token) {
      throw new Error('TOKEN não encontrado');
    }

    localStorage.setItem('TOKEN', token);
  }
}

export default LoginService;
