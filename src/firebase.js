import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyC-9UDm1LN5in0ghARQepb9hjArrzSOYco",
    authDomain: "react-slack-clone-78e36.firebaseapp.com",
    databaseURL: "https://react-slack-clone-78e36.firebaseio.com",
    projectId: "react-slack-clone-78e36",
    storageBucket: "gs://react-slack-clone-78e36.appspot.com",
    messagingSenderId: "121608890227"
};
firebase.initializeApp(config);

export default firebase;
