import { useState } from 'react';
import NotificacaoContext from '../../contexts/NotificationContext';

const Notificacao = ({ children }) => {
  const [msg, setMsg] = useState('');

  return (
    <NotificacaoContext.Provider value={setMsg}>
      {children}
      {msg && (
        <div className="notificacaoMsg" onAnimationEnd={() => setMsg('')}>
          {msg}
        </div>
      )}
    </NotificacaoContext.Provider>
  );
};

export default Notificacao;
