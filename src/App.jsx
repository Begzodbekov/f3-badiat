import { Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Nasr from './pages/Nasr/Nasr';
import Header from './Components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nasr' element ={<Nasr/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
