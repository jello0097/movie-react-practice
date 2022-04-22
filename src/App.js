import { useState, useEffect } from 'react';

function Hello() {
  useEffect(() => {
    console.log('new');
    return () => console.log('destory'); // cleanup
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow((prev) => !prev);
  return (
    <div>
      <div>
        {show ? <Hello /> : null}
        <button onClick={onClick}>{show ? 'hide' : 'show'}</button>
      </div>
    </div>
  );
}

export default App;
