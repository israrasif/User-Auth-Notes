const initialState = ''

const tokenReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'TOKEN_STATUS' : {
            return action.payload
        }

        case 'LOGOUT' : {
            return ''
        }

        default : { 
            return state
        }
    }
}

export default tokenReducer