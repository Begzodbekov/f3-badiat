import { Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Nasr from './pages/Nasr/Nasr';
import Header from './Components/Header/Header';
import Author from './pages/Author/Author';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nasr' element ={<Nasr/>}></Route>
        <Route path='/author' element={<Author/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
