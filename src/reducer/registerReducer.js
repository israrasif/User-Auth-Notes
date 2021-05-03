const initialValue = ''

const registerReducer = (state = initialValue, action) => {

    switch(action.type) {

        case 'REGISTER_PUSH' : {
            return 'registered'
        }

        case 'EMPTY' : {
            return ''
        }

        default : {
            return state
        }
    }
} 

export default registerReducer