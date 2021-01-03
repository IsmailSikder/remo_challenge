import * as firebase from 'firebase';

// TODO: fill in your firebase config
const firebaseConfig = {
    
        apiKey: "AIzaSyCSCnA0U2Ete9g41xT0EIeWcyCzSgv7hnA",
        authDomain: "theater-350bd.firebaseapp.com",
        projectId: "theater-350bd",
        storageBucket: "theater-350bd.appspot.com",
        messagingSenderId: "677467305307",
        appId: "1:677467305307:web:fceb0ce86e4da162fed67e",
        measurementId: "G-ZWZ1GRLGN5"

};

firebase.initializeApp(firebaseConfig);

export default firebase;