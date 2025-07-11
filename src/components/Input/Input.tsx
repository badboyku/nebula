import React from 'react';

type Props = { placeholder: string };

const Input: React.FC<Props> = ({ placeholder }) => {
  return <input placeholder={placeholder} />;
};

export default Input;
