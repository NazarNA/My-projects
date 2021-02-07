import {
    CHANGE_EMAIL,
    CHANGE_NAME, 
    CHANGE_PASSWORD,
    SUBMIT_FORM_FAILURE,
    SUBMIT_FORM_START,
    SUBMIT_FORM_SUCCESS
} from "./types"

export const submitFormStart = () => ({type: SUBMIT_FORM_START});
export const submitFormSuccess = () => ({type: SUBMIT_FORM_SUCCESS});
export const submitFormFailure = e => ({type: SUBMIT_FORM_FAILURE, payload: e});

export const submitForm = (email, name, password) =>{
    return dispatch => {
        dispatch(submitFormStart())
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email,
                name,
                password,
            })
        })
            .then(response => response.json())
            .then(json => {
                dispatch(submitFormSuccess())
                console.log(json)
            })
            .catch(err => dispatch(submitFormFailure(err)))
    }
};

export const nameInput = name => ({ type: CHANGE_NAME, payload: name }) 
export const emailInput = email => ({ type: CHANGE_EMAIL, payload: email }) 
export const passwordInput = password => ({ type: CHANGE_PASSWORD, payload: password }) 