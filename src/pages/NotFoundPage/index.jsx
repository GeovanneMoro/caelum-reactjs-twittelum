import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NotFoundPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <title>Twittelum - Página não encontrada</title>
      </Helmet>

      <div className="container">
        A URL <strong>{location.pathname}</strong> não existe no Twittelum, se
        quiser voltar para a página inicial bastar{' '}
        <Link to="/">clicar aqui</Link>.
      </div>
    </>
  );
};

export default NotFoundPage;
