import React from 'react';
import ReactDOM from 'react-dom';

function MinutesToHours() {
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
}

function KmToMiles() {
  return <h3>Km to Miles</h3>;
}

function App() {
  const [index, setIndex] = React.useState('not-selected');
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Convertor</h1>
      <select value={index} onChange={onSelect}>
        <option value="not-selected">Select plz!</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km t& Miles</option>
      </select>
      <hr />
      {index === 'not-selected' ? 'Select unit please!' : null}
      {index === '0' ? <MinutesToHours /> : null}
      {index === '1' ? <KmToMiles /> : null}
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
