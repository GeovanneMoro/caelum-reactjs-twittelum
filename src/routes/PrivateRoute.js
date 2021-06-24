import { Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  let isAutenticado = localStorage.getItem('TOKEN') ? true : false;
  const { component: ComponentePrivado, ...propriedades } = props;

  if (isAutenticado) {
    // retornar o componente se estiver autenticado
    return <ComponentePrivado {...propriedades} />;
  } else {
    // redireciona para login se não estiver autenticado
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
