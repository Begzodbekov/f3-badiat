import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Nasr from './pages/Nasr/Nasr';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nasr' element ={<Nasr/>}></Route>
        <Route path='/signup' element ={<Signup/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
