const initialValue = {}

const userDetails = (state = initialValue, action) => {
    switch (action.type) {
        case 'ACCOUNT_DETAILS' : {
            return action.payload
        }

        default : {
            return state
        }
    }
}

export default userDetails

