import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './components/Context';

function App() {
  return (
    <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>} />
      </Routes>
    </BrowserRouter><Home />
    </DataProvider>
  );
}

export default App;
