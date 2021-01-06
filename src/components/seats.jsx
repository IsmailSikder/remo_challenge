
import * as React from 'react';
import {connect} from 'react-redux'
import { selectRoom } from 'reducers/tables/tables-selector';
import {createStructuredSelector} from 'reselect'
const GuestSeats =({user,seats,className,tableName})=>{
    
    const {first_table} = seats
    console.log(tableName)
  return ( 
     <div {...className}>

     {
              
    
      }
    

     </div>
   
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