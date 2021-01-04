
import * as React from 'react';
import {connect} from 'react-redux'
import { selectRoom } from 'reducers/tables/tables-selector';
import {createStructuredSelector} from 'reselect'
const GuestSeats =({user,seats,className,rooms})=>{
    console.log(rooms)
  return ( 
     <div {...className}>

     {
               rooms ===null? 
          
               <div>{user}</div>
               :
              <div>nothing</div>
    
      }
    

     </div>
   
  );
}

const mapStateToProps = createStructuredSelector(
    {
        rooms: selectRoom
    }
  )

  const mapDispatchToProps=(dispatch)=>(
      {
        
      }
  )
  export default connect(mapStateToProps, mapDispatchToProps) (GuestSeats);