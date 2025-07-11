import { Button } from 'nebula';
import React from 'react';
import HelloWorld from './components/HelloWorld';
import logoUrl, { ReactComponent as Logo } from './logo.svg';
import './style.scss';
import './styles.css';

const App = () => {
  return (
    <div>
      <h1>Nebula</h1>
      <HelloWorld />
      <img src={logoUrl} className="logo" alt="logo" />
      <Logo width={40} />
      <div>
        <Button label="My Button" />
      </div>
    </div>
  );
};

export default App;
