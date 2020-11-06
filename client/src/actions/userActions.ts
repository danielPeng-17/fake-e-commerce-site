import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants";
import axios from 'axios';
import Cookie from 'js-cookie';

const signin = (email: string, password: string) => async (dispatch: any) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post("/api/users/signin", { email, password });
        console.log(data);
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    }
    catch(err) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: err.message });
    }
}

const register = (name: string, email: string, password: string) => async (dispatch: any) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
    try {
        const { data } = await axios.post("/api/users/register", { name, email, password });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        Cookie.set('register', JSON.stringify(data));
    }
    catch(err) {
        dispatch({ type: USER_REGISTER_FAIL, payload: err.message });
    }
}

export { signin, register };