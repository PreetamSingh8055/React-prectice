
import './App.css';
import Navbar  from './Component/Navbar';
import PropsMessageThroughClass from './Component/PropsMessageThroughClass';
import Message from './Component/WelcomeMessage';
import Person from './Component/Person/Person.js';
import  ClassComponent from './Component/ClassComponent.js';


function App() {
  return (
    <>
     <header className="App-header">
      <Navbar />
      </header>
     <div className="App">
    <Message name="Preetam Singh" age="23"/>
    <PropsMessageThroughClass  />
    {/* name="React"    */}
    {/* text="who the fuck you are??" */}
    </div>

    <p>this is css task </p>
   <Person />
   <h1 className='label'> Preetam</h1>

   <ClassComponent />
    </>
  );
}

export default App;
