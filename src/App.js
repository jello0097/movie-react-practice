import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
