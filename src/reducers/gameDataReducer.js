import './user/userType.js'
import ActionType from './user/userType.js'

export default (state = {}, action ) => {
    switch(action.type){
        case 'UPDATE_MOVE':
            return state
        case ActionType.Add_USER:
            return {

            }
        default:
            return state
    }
}