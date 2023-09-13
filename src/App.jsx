import { Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Nasr from './pages/Nasr/Nasr';
import Signup from './pages/Signup/Signup';
import Header from './Components/Header/Header';
import Books from './pages/Books/Books';
import Author from './pages/Author/Author';
import Signin from './pages/Signin/Signin';
import Account from './pages/Account/Account';
import Booksv from './pages/Booksv/Booksv';

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/account' element={<Account/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/nasr' element ={<Nasr/>}></Route>
        <Route path='/books' element ={<Books/>}></Route>
        <Route path='/' element={<Home />} />
        <Route path='/nasr' element={<Nasr />}></Route>
        <Route path='/author/:slug' element={<Author />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/book-view' element={<Booksv/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
