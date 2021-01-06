import SeatingType from './seating.type'

const SeatingAction =(seats)=>({
    type : SeatingType.ADD_USER_TO_SEAT,
    payload: seats
})