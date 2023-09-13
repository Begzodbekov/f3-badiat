import { Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Nasr from './pages/Nasr/Nasr';
import Signup from './pages/Signup/Signup';
import Header from './Components/Header/Header';
<<<<<<< HEAD
import Books from './pages/Books/Books';
=======


import Author from './pages/Author/Author';
import Signin from './pages/Signin/Signin';

>>>>>>> 0e6957c502152b3e6913532e46264abdddef265e
function App() {


  return (
    <div className="App">
      <Header />





      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Home/>} />
        <Route path='/nasr' element ={<Nasr/>}></Route>
        <Route path='/books' element ={<Books/>}></Route>
=======
        <Route path='/' element={<Home />} />
        <Route path='/nasr' element={<Nasr />}></Route>
        <Route path='/author/:slug' element={<Author />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
>>>>>>> 0e6957c502152b3e6913532e46264abdddef265e
      </Routes>

    </div>
  );
}

export default App;
