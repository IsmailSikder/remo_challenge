
import addUser from './user.utils'
import userActionType from './userType.js'

const initila_State ={
    setCurrentUser:false,
    user :''
}

export const userReducer =(state=initila_State,action)=>{

    switch(action.type){
        case userActionType.ADD_USER:
            return{
                ...state,
              user : addUser(state.user,action.payload) 
            } 
        default:
            return state
    }
}