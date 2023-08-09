import { BrowserRouter,Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login.js';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Map from './Components/Map';
import Analyze from './Components/Analyze';
import Signup from './Components/Signup';
import Test from './Components/Test';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Oswald:wght@200&display=swap');
</style>


function App() {
  return (
    <>
    <div className='App'>
      <Test/>
      {/*<Signup/>*/}
      {/*<Login/>*/}
      {/*<Dashboard/>*/}
      {/*<About/>*/}
      {/*<Map/>*/}
      {/*<Analyze/>*/}
    </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='/Signup' element = {<Signup/>}/>
      <Route path='/Dashboard' element = {<Dashboard/>}/>
      <Route path='/About' element = {<About/>}/>
      <Route path='/Analyze' element = {<Analyze/>}/>
      <Route path='/Test' element = {<Test/>}/>
      <Route path='/Map' element = {<Map/>}/>
      <Route path='/Map/SSN College Main Gate' element = {<Map title={'SSN College Main Gate'}/>}/>
      <Route path='/Map/SSN College Clock Tower' element = {<Map title={'SSN College Clock Tower'}/>}/>
      <Route path='/Map/SSN College ECE department' element = {<Map title={'SSN College ECE department'}/>}/>
      <Route path='/Map/SSN School of Management' element = {<Map title={'SSN School of Management'}/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
