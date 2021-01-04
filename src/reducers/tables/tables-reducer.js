
import TableConfig from './tableConfig.json';
import tablesActionType from './tables-type';
import addUser from './tables.utils'
const initial_State ={
    theaterTables : TableConfig,
    rooms:null,
    user :[]
}

const TablesReducer =(state=initial_State,action)=>{
    switch(action.type){
        case tablesActionType.ADD_TO_ROOMS:
            return{
                ...state,
                rooms:[...state.rooms.action.payload]
            }
        case tablesActionType.ADD_USER:
            return{
                ...state,
                user : addUser(state.user,action.payload) 
            } 
        default:
            return state 
    }

}

export default TablesReducer