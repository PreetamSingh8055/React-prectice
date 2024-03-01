import IncreAndDecre from './Components/IncreAndDecre.js';
import './App.css';
import Toggle from './Components/Toggle.js';
import RealToggle from './Components/RealToggle.js';
import Navbar from  './Components/Navbar.js';
import TranslateBox from './Components/TranslateBox.js'
import ApiTable from './Components/ApiTable.js'

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" exact element={<Toggle/>} />
        <Route path="/about" element={<RealToggle/>} />
        <Route path="/services" element={<IncreAndDecre/>} />
        <Route path="/contact" element={<TranslateBox/>} />
        <Route path="/Table" element={<ApiTable/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
