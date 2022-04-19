import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const Title = () => {
  return (
    <h3
      id="title"
      onMouseEnter={() => {
        console.log('mouse enter');
      }}
    >
      Hello This is Title
    </h3>
  );
};

const Button = () => {
  return (
    <button
      style={{ backgroundColor: 'orange' }}
      onClick={() => {
        console.log('I am clicked');
      }}
    >
      Click me!
    </button>
  );
};

const Container = () => {
  return (
    <div>
      <Title />
      <Button />
    </div>
  );
};

ReactDOM.render(<Container />, root);
