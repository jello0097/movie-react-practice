import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const App = () => {
  let [counter, setCounter] = React.useState(0);
  const onClick = () => {
    //setCounter(counter + 1);
    setCounter((current) => current + 1);
  };
  return (
    <div>
      <h3>Total Clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

ReactDOM.render(<App />, root);
