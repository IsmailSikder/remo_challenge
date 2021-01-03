import './userType.js'
import userActionType from './userType.js'
export const addUser =(user)=>({
    type: userActionType.ADD_USER,
    payload:user,
})