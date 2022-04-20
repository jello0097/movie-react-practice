import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Btn({ text, emoji, number = 2 }) {
  return (
    <button
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 20px',
        border: 0,
        borderRadius: 10,
      }}
    >
      {text}{emoji}{number}
    </button>
  );
}
Btn.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  number: PropTypes.number.isRequired,
}
function App() {
  const [index, setIndex] = React.useState('not-selected');
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <Btn text="Save Changes" emoji="🍟" number={1} />
      <Btn text="Continue" />
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
