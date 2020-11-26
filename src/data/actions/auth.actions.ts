import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import axios from 'axios';

export interface UserLogin {
  type: ActionTypes.LOGIN_USER;
  payload: {
    email: string;
    password: string;
  }
}

export interface UserLoginSuccess {
  type: ActionTypes.LOGIN_USER_SUCCESS;
  payload: {
    token: string;
    user: {
      email: string;
      id: number;
      firstName: string;
      lastName: string;
      nickname: string;
    }
  }
}

export interface UserLoginFailure {
  type: ActionTypes.LOGIN_USER_FAILURE;
  payload: {
    message: string;
  }
}

// export interface UserRegister {
//   type: ActionTypes.REGISTER_USER;
//   payload: {
//     firstName: string;
//     lastName: string;
//     nickname: string;
//     email: string;
//     password: string;
//   }
// }

// export interface UserRegisterSuccess {
//   type: ActionTypes.REGISTER_USER_SUCCESS;
//   payload: {
//     firstName: string;
//     lastName: string;
//     nickname: string;
//     email: string;
//     password: string;
//   }
// }

// export interface UserRegisterFailure {
//   type: ActionTypes.REGISTER_USER_FAILURE;
//   payload: {
//     firstName: string;
//     lastName: string;
//     nickname: string;
//     email: string;
//     password: string;
//   }
// }

export const loginUser = (email: string, password: string) => async (dispatch: Dispatch) => {
  return axios.post('http://localhost:3000/auth/login', { email, password })
    .then(response => {
      console.log(response);

      dispatch({
        type: ActionTypes.LOGIN_USER_SUCCESS,
        payload: response.data,
      });

      return Promise.resolve();
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: ActionTypes.LOGIN_USER_FAILURE,
        payload: 'nie udalo sie zalogowac...'
      });

      return Promise.reject();
    });
}