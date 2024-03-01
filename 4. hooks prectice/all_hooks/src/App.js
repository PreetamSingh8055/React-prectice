
import './App.css';
import Navbar from './Components/Navbar.js';
import UseEffect from './Components/useEffect.js';
import UseReducer from './Components/uReducer.js'
import UseRef from './Components/Ref.js'

import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<UseEffect/>}/>
        <Route path="/useReducer" exact element={<UseReducer/>}/>
        <Route path="/useRef" exact element={<UseRef/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
