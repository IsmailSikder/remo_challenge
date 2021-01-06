import SeatingType from './seating.type'

export const SeatingAction =(seats)=>({
    type : SeatingType.ADD_USER_TO_SEAT,
    payload: seats
})

export const SeatOccupied =()=>({
    type: SeatingType.SEAT_OCCUPIED
})
export const UserAssignSeat =()=>({
    type: SeatingType.USER_ASSIGN_SEAT
})