import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserAction } from '../../redux/actions/users/userActions';

const Navbar = props => {
    const state = useSelector(state => state.userLogin);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutUserAction());
        navigate('/');
    };

    const { userInfo, loading, error } = state;
    return (
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <a className='navbar-brand' href='/'>
                    BK
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarColor01'
                    aria-controls='navbarColor01'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarColor01'>
                    <ul className='navbar-nav m-auto'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='/'>
                                Home <span className='sr-only'>(current)</span>
                            </a>
                        </li>
                        {!userInfo ? (
                            <>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/login'>
                                        Login
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/register'>
                                        Register
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/books'>
                                        Books
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/addbook'>
                                        Add book
                                    </a>
                                </li>

                                <li className='nav-item'>
                                    <a className='nav-link' href='/users'>
                                        Users
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/profile'>
                                        Profile
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a
                                        onClick={logoutHandler}
                                        className='nav-link'
                                        href='/'>
                                        Logout
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;