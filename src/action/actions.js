import axios from 'axios'

export const startRegister = (data) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/register', data)
            .then((response) => {
                console.log(data)
                dispatch(registerAction)
                dispatch(register)
                alert('user registered')
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
}

const register = {
    type: 'REGISTER_PUSH'
}

const registerAction = {
    type : 'REGISTER'
}

export const emptyRegister = {
    type: 'EMPTY'
}
 
export const startLogin = (data) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/login', data)
            .then((response) => {
                console.log(response.data)
                alert('logged in')
                dispatch(loginAction)
                dispatch(tokenStatus(response.data.token))
            })
            .catch((error) => {
                alert(error.message)
            })
        
    }  
}

const loginAction = {
    type: 'LOGIN'
}

export const tokenStatus = (token) => {
    return {
        type: 'TOKEN_STATUS',
        payload: token
    }
}


export const startAccount = (token) => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/users/account', {
            headers: {
                'x-auth' : token
            }
        })
            .then((response) => {
                console.log(response.data)  
                dispatch(startAccountAction)
                dispatch(accountDetails(response.data))
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
}

const startAccountAction = {
    type: 'START_ACCOUNT'
}

export const accountDetails = (userData) => {
    return {
        type: 'ACCOUNT_DETAILS',
        payload: userData
    }
}

export const logout = {
    type: 'LOGOUT'
}

export const startNotes = (token) => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/api/notes', {
            headers: {
                'x-auth': token
            }
        })
            .then((response) => {
                dispatch(getAllNotes(response.data))
                console.log(response.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const getAllNotes = (allNotes) => {
    return {
        type: 'ALL_NOTES',
        payload: allNotes
    }
}

export const startAddNote = (formData, token) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes', formData, {
            headers: {
                'x-auth': token
            }
        })
            .then((response) => {
                dispatch(addNote)
                console.log('successfully added notes')
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
}

const addNote = {
    type: 'ADD_NOTE'
}

export const startDeleteNote = (id, token) => {
    return (dispatch) => {
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, {
        headers: {
            'x-auth': token
        }
        })
        .then((response) => {
            const result = response.data
            dispatch(deleteNote)
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

const deleteNote = {
    type: 'DELETE_NOTE'
}
