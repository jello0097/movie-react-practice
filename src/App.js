import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<h1>hello</h1>}></Route>
      </Routes>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
