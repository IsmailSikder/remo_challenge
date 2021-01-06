import { createSelector} from "reselect"


const tablesData = state => state.tables

const room = state=> state.tables

export const selectTables = createSelector(
    [tablesData],
    tables=>tables.theaterTables
)

export const selectSeats = createSelector(
    [selectTables],
    seats =>{
 
       const seatsArray = seats.tables.map(tables=>tables)
       const rooms = seatsArray.reduce((acc,cur,i,rooms)=>{
           return {...acc, [cur.id]:cur.seats}
       },{})
        
      return  rooms
    } 
)

