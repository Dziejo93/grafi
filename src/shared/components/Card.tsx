import React from 'react';

type props = { styleName?: string };

const Card: React.FC<props> = ({ styleName }) => {
  return <div className={`${styleName} max-w-sm rounded overflow-hidden shadow-lg`}>xd</div>;
};

export default Card;
