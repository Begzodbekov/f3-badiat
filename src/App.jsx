import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Nasr from './pages/Nasr/Nasr';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nasr' element ={<Nasr/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
