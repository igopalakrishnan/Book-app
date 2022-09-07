import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Books from './components/Books/Books';
import AddBook from './components/Books/AddBook';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import BookDetail from './components/Books/BookDetail';
import Users from './components/Users/Users';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/books' element={<Books />} />
          <Route exact path='/addbook' element={<AddBook />} />
          <Route exact path='/user-update' element={<UpdateProfile />} />
          <Route exact path='/book/:id' element={<BookDetail />} />
          <Route exact path='/users' element={<Users />} />
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;