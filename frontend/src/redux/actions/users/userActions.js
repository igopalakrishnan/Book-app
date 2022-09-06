import axios from "axios";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from "../actionTypes"

const registerUserAction = (name, email, password) => {
    return async dispatch => {

        try {
            dispatch({
                type: USER_REGISTER_REQUEST,
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axios.post('/api/users/register', {
                name,
                email,
                password,
            }, config);

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data,
            });


            localStorage.setItem('userAuthData', JSON.stringify(data));

        } catch (error) {

            dispatch({
                type: USER_REGISTER_FAIL,
                error: error.response && error.response.data.message,
            })
        }

    };

};



const loginUserAction = (email, password) => {
    return async dispatch => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST,
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const { data } = await axios.post('/api/login', {
                email,
                password,
            }, config);

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            });

            localStorage.setItem('userAuthData', JSON.stringify(data));
        } catch (error) {

            dispatch({
                type: USER_LOGIN_FAIL,
                error: error.response && error.response.data.message,
            })
        }
    }
};




const logoutUserAction = () => {
    return async dispatch => {
        try {

            localStorage.removeItem('userAuthData');
            dispatch({
                type: USER_LOGOUT_SUCCESS,
            });
        } catch (error) { }
    }
};



const getUserProfileAction = () => {
    return async (dispatch, getState) => {
        const { userInfo } = getState().userLogin;
        try {
            dispatch({
                type: USER_PROFILE_REQUEST,
            });
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            const { data } = await axios.get('/api/profile', config);
            dispatch({
                type: USER_PROFILE_SUCCESS,
                payload: data,
            })
        } catch (error) {
            dispatch({
                type: USER_PROFILE_FAIL,
                payload: error.response && error.response.data.message,
            })
        }
    }
}


export { registerUserAction, loginUserAction, logoutUserAction, getUserProfileAction };