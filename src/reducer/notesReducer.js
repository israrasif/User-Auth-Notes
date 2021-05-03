const initialValue = []

const notesReducer = (state = initialValue, action) => {
    switch(action.type){
        case 'ALL_NOTES' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

export default notesReducer