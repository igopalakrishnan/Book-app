import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {registerUserAction} from '../../redux/actions/users/userActions';

const RegisterUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    console.log(userLogin);

    useEffect(() => {
        if(userInfo) {
            navigate('/dashboard');
        }
    }, [userInfo])

    const formSubmitHandler = (e) => {
        e.preventDefault();

        dispatch(registerUserAction(name, email, password));

    }
    
    return (
        <div className='row container-height'>
            <div className='col-lg-6 col-md-6 m-auto'>
                <div className='container'>
                    <h1 className='text-center'>Register</h1>

                    <form onSubmit={formSubmitHandler}>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>Name</label>
                                <input
                                value={name}
                                onChange={e=> setName(e.target.value)}
                                    type='text'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Enter Name'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>Email address</label>
                                <input
                                 value={email}
                                 onChange={e=> setEmail(e.target.value)}
                                    type='email'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Enter email'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputPassword1'>Password</label>
                                <input
                                 value={password}
                                 onChange={e=> setPassword(e.target.value)}
                                    type='password'
                                    className='form-control'
                                    id='exampleInputPassword1'
                                    placeholder='Password'
                                />
                            </div>
                            <button type='submit' className='btn btn-info m-auto'>
                                Register
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterUser;