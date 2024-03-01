import './App.css';
import Navbar from './components/Navbar.js'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home.js'
import UseState from    './components/UseState.js'
import UseEffect from './components/UseEffect.js';
import UseMemo from './components/UseMemo.js';

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <Routes>
        <Route  path='/' exact  element={<Home/>}  />
        <Route  path='/state' exact element={<UseState/>}  />
        <Route   path='/effect' exact element={<UseEffect/>} />
        <Route path='/memo' exact element={<UseMemo/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
