import * as React from 'react';
import './Theater.scss'; 
import MapImage from '../assets/conference-map.svg';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectUserDetails } from 'reducers/user/user-selector';

import { selectSeats, selectTables } from 'reducers/tables/tables-selector';

import GuestSeats from './seats'
import { auth } from 'firebase';
const Theater = ({user, tableConfig,seats}) => {
  //const firstTable = TableConfig.tables[0];
  const history = useHistory();

  const {tables,width,height} = tableConfig
  const {first_table} = seats
 console.log(first_table)
 

  return ( 
    <div className='remo-theater' style={{width: width, height: height}}>
      <div className='rt-app-bar'>
        {/**
          * Show user profile pic/name after login
          */}
        <span>{user}</span>
        <button onClick={() => (auth.signOut(),history.push('/'))} >Logout</button>
       
      </div>
     
      <div className='rt-rooms'>
        {/** * Create rooms here as in the requirement and make sure it is aligned with background*/}
        {
          tables.map(table=>{
           return <div className='rt-room' style={{width: table.width, height: table.height, top: table.y, left: table.x}}>
                       {
                            table.seats.map((seat,i,)=>{
                                  console.log(seat)
                                 return <span style={{width: table.width, height: table.height,top: seat.y, left: seat.x}}>

                                      {
                                        i<1?
                                          seat.y
                                         :
                                         ''

                                      }
                                 
                                 </span>
                               })
                            

                        }
                
              <div className='rt-room-name'>{table.id}
                  
              </div>
            </div> 
           }
           )
         
        }
       
      </div>
        <div>
          
        </div>
      <div className='rt-background'>
        <img src={MapImage} alt='Conference background'/>
      </div>
    </div>
  );
};
 
const mapStateToProps = createStructuredSelector(
  {
    user: selectUserDetails,
    tableConfig: selectTables,
    seats : selectSeats
  }
)

const mapDispatchToProps=(dispatch)=>(
  {
      
  }
)
export default connect(mapStateToProps,mapDispatchToProps) (Theater);