import { Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Nasr from './pages/Nasr/Nasr';
import Signup from './pages/Signup/Signup';
import Header from './Components/Header/Header';


import Author from './pages/Author/Author';
import Signin from './pages/Signin/Signin';

function App() {


  return (
    <div className="App">
      <Header />





      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nasr' element={<Nasr />}></Route>
        <Route path='/author' element={<Author />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
      </Routes>

    </div>
  );
}

export default App;
