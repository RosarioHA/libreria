import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <><BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>} />
      </Routes>
    </BrowserRouter><Home /></>
   
  );
}

export default App;
