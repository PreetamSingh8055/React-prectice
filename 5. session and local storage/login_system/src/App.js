import './App.css';
import { Route, Routes } from "react-router-dom"; // Import BrowserRouter
import Login from './Components/Login.js'
import Second from './Components/Second.js'

function App() {
  return (
  
      <>
        <Routes>
          <Route path="/first" element={<Login />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </>
  
  );
}

export default App;
