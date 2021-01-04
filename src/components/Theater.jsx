import * as React from 'react';
import './Theater.scss'; 
import MapImage from '../assets/conference-map.svg';

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectUserDetails } from 'reducers/user/user-selector';

import { selectTables } from 'reducers/tables/tables-selector';


const Theater = ({user, tableConfig}) => {
  //const firstTable = TableConfig.tables[0];
  const {tables,width,height} = tableConfig
 
  console.log(user)
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
              <div className='rt-room-name'>{table.id}</div>
              <div>{user}</div>
            </div> 
           }
           )
        }
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
    tableConfig: selectTables
  }
)
export default connect(mapStateToProps) (Theater);