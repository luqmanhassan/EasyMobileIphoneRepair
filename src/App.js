import Home from './components/Home.js';
import Appointments from './components/Appointments.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App bg-yellow-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="appointments" element={<Appointments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
