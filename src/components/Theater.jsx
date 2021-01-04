import * as React from 'react';
import './Theater.scss'; 
import MapImage from '../assets/conference-map.svg';

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectUserDetails } from 'reducers/tables/tables-selector';

import { selectSeats, selectTables } from 'reducers/tables/tables-selector';
import {addRooms} from 'reducers/tables/tables-action'
import GuestSeats from './seats'
const Theater = ({user, tableConfig,seats, addRooms}) => {
  //const firstTable = TableConfig.tables[0];
  const {tables,width,height} = tableConfig
  const {first_table} = seats
 console.log(first_table)

  return ( 
    <div className='remo-theater' style={{width: width, height: height}}>
      <div className='rt-app-bar'>
        {/**
          * Show user profile pic/name after login
          */}
          <h1>{user}</h1>
        <a href='javascript:;' style={{color: 'red'}}>Logout</a>
      </div>
     
      <div className='rt-rooms'>
        {/** * Create rooms here as in the requirement and make sure it is aligned with background*/}
        {
          tables.map(table=>{
           return <div className='rt-room' style={{width: table.width, height: table.height, top: table.y, left: table.x}}>
              <div className='rt-room-name'>{table.id}
              <GuestSeats
               className='rt-room-name'
                user={user}
                seats={seats}
                tableName = {tables.id}
              />
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
      addRooms : rooms=>dispatch(addRooms(rooms))
  }
)
export default connect(mapStateToProps,mapDispatchToProps) (Theater);