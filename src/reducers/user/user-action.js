
import userActionType from './user-type.js'
export const addUser =(user)=>({
    type: userActionType.ADD_USER,
    payload:user,
})