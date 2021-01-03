import React, { useEffect } from 'react';
import Firebase from '../services/firebase';
import { useHistory } from 'react-router-dom';
import { sendGetRequest, sendPostRequest } from '../apis';
import { connect } from 'react-redux';
import {addUser} from 'reducers/user/user-action';


const Auth = ({addUser}) => {
  const history = useHistory();

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        addUser(user.displayName)
        // TODO: Store user details
        history.push('/theater');
      }
    });

    // Sample API requests
    sendGetRequest(`sample-get-request?param=1`).then(response => console.log(response));
    sendPostRequest(`sample-post-request`, {postParam: 1}).then(response => console.log(response));
  }, []);
  const redirect = () => {
    const provider = new Firebase.auth.GoogleAuthProvider();
    Firebase.auth().signInWithPopup(provider);
  };

  return ( 
    <div 
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1> Remo Coding Challenge Join Room </h1>
      <button onClick={redirect}> Login With Google </button>
    </div> 
  );
};

const mapDispatchToProps =(dispatch)=>(
  {
    addUser: user=>dispatch(addUser(user))
  }
)
export default connect(null, mapDispatchToProps)(Auth);