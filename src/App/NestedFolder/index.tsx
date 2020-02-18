import React from 'react';

const dupa = false;

const Login: React.FC = () => {
  if (dupa) {
    return <div> login or something</div>;
  }
  return <div>koniec zabawy</div>;
};

export default Login;
