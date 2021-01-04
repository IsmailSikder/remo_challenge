
import tablesActionType from './tables-type.js'

export const addRooms =(rooms)=>({
    type: tablesActionType.ADD_TO_ROOMS,
    payload:rooms,
})

export const addUser =(user)=>({
    type: tablesActionType.ADD_USER,
    payload:user,
})