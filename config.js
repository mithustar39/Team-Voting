import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAfYXVmNyPF8z5LObTVPjNT4shNo4pUn4Y",
    authDomain: "pro-c67-dca9d.firebaseapp.com",
    databaseURL: "https://pro-c67-dca9d-default-rtdb.firebaseio.com",
    projectId: "pro-c67-dca9d",
    storageBucket: "pro-c67-dca9d.appspot.com",
    messagingSenderId: "72164139862",
    appId: "1:72164139862:web:9eec2f87e0e92958edecf7",
    measurementId: "G-XLX7WQRD27"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();