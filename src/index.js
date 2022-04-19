import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const App = () => {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  };

  return (
    <div>
      <h1>Super Convertor</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={inverted ? amount * 60 : amount}
        className="minutes"
        placeholder="Minutes"
        type="number"
        onChange={onChange}
        disabled={inverted}
      />
      <label htmlFor="hours">Hours</label>
      <input
        value={inverted ? amount : Math.round(amount / 60)}
        className="hours"
        placeholder="Hours"
        type="number"
        onChange={onChange}
        disabled={!inverted}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? 'Trun back' : 'Invert'}</button>
    </div>
  );
};

ReactDOM.render(<App />, root);
