
import * as React from 'react';
import { useState } from "react"
import {connect} from 'react-redux'
import { selectRoom } from 'reducers/tables/tables-selector';
import {createStructuredSelector} from 'reselect'
const GuestSeats =({user,table,tableName,index,...otherProps})=>{
    
   //const [userAssignSeats, setUserAssignSeat] = React.useState(false)
   //console.log(userAssignSeats)
   console.log(user)
    console.log(tableName)
  return (
    <span  >
      {
         table.seats.map((seat,i)=>{
        //  console.log(seat.y)
                     return (index<1 && i<1?
                      <span {...otherProps} style={{top:seat.y,left:seat.x}}> {user}</span>
                      :
                      '')    
            }
        )
      }

    </span> 
    
   
  );
}

const mapStateToProps = createStructuredSelector(
    {
        
    }
  )

  const mapDispatchToProps=(dispatch)=>(
      {
        
      }
  )
  export default connect(mapStateToProps, mapDispatchToProps) (GuestSeats);