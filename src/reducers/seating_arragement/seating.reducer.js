import SeatingType from "./seating.type"

const initial_state ={
    currentUserSeatsAssign : false,
    seatOccupied:false,
    seats : []
}

const SeatingReducer =()=>{
    switch(action.type){
    case SeatingType.USER_ASSIGN_SEAT:
        return{
            ...state,
            currentUserSeatsAssign :!currentUserSeatsAssign
        }
    case SeatingType.SEAT_OCCUPIED:
        return{
            ...state,
            seatOccupied:!seatOccupied
        }
    case SeatingType.ADD_USER_TO_SEAT:
            return{
                ...state,
                seats: addUserToSeat(state.seats,action.payload)
            }
    default :
        return state
}

}