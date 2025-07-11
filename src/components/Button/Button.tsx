import React from 'react';

type Props = { label: string };

const Button: React.FC<Props> = ({ label }) => {
  return <button type="button">{label}</button>;
};

export default Button;
