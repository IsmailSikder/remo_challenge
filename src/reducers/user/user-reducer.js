
import addUser from './user.utils'
import userActionType from './userType.js'

const initila_State ={
    user :['Name1','name2','name3','name4', 'name5']
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