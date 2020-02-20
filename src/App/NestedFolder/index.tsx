import React from 'react';
import { useHistory } from 'react-router-dom';

const dupa = true;

const NestedRoute: React.FC = () => {
  const history = useHistory();

  if (dupa) {
    history.push('/login');
  }
  return <div>koniec zabawy</div>;
};

export default NestedRoute;
