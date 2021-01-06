
import userActionType from './user-type';
import addUser from './user.utils.js'
const initial_State ={
    user :''
}

const userReducer =(state=initial_State,action)=>{
    switch(action.type){
        
        case userActionType.ADD_USER:
            return{
                ...state,
                user : action.payload
            } 
        default:
            return state 
    }

}

export default userReducer