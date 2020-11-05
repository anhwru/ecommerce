import jwtAuthService from "../../services/jwtAuthService";
import { setUserData } from "./UserActions";
import history from "history.js";

export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOADING = "LOGIN_LOADING";

export function loginWithUsernameAndPassword({ username, password }) {
    return (dispatch) => {
        return new Promise(function(resolve, reject) {
            dispatch({
                type: LOGIN_LOADING,
            });
    
            jwtAuthService
                .loginWithUsernameAndPassword(username, password)
                .then((user) => {
                    
                    dispatch(setUserData(user))
                    resolve(user)
                    return dispatch({
                        type: LOGIN_SUCCESS,
                    });
                   
                })
                .catch((error) => {
                    // let err = {};
                    // err.message = error.response
                    //     ? error.response.data.message
                    //     : "Máy chủ đang bận, mời bạn thử lại";
                    // alert(err.message);
                    // return dispatch({
                    //     type: LOGIN_ERROR,
                    //     data: err,
                    // });
                });
        } );
        
    };
}

