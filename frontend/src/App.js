import logo from './logo.svg';
import './App.css';
import AddBook from './components/Books/AddBook';
import Books from './components/Books/Books';
import Navbar from './components/Navbar/Navbar';
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/LoginUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  exact path='/' element={<Home />} />
        <Route  exact path='/books' element={<Books />} />
        <Route  exact path='/profile' element={<Profile />} />
        <Route  exact path='/addbook' element={<AddBook />} />
        <Route  exact path='/register' element={<RegisterUser />} />
        <Route  exact path='/login' element={<LoginUser />} />
      </Routes>

      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
