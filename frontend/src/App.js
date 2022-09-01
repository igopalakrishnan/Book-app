import logo from './logo.svg';
import './App.css';
import AddBook from './components/Books/AddBook';
import Books from './components/Books/Books';
import Navbar from './components/Navbar/Navbar';
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/LoginUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  exact path='/books' element={<Books />} />
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
