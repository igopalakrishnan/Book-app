import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from '../reducers/users/userAuthReducer';
import userProfileReducer from '../reducers/users/userProfileReducer';
import userUpdateReducer from '../reducers/users/userUpdateReducer';
import createdBookReducer from '../reducers/books/createBookReducer';
import booksListReducer from '../reducers/books/bookListReducer';
import bookDetailReducer from '../reducers/books/bookDetailsReducer';
import usersListReducer from '../reducers/users/userListReducer';

const middleware = [thunk];

const reducer = combineReducers({
    userLogin: userReducer,
    userProfile: userProfileReducer,
    updatedUser: userUpdateReducer,
    bookCreated: createdBookReducer,
    booksList: booksListReducer,
    bookDetails: bookDetailReducer,
    usersList: usersListReducer,
});



const userAuthFromStorage = localStorage.getItem('userAuthData')
    ? JSON.parse(localStorage.getItem('userAuthData'))
    : null;

const initialState = {
    userLogin: { userInfo: userAuthFromStorage },
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;