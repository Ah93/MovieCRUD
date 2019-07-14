// db.js

import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyB8umpTMygOgsLKIzDIBjxFsopXuMmYgf8",
    authDomain: "fav-movies-63d08.firebaseapp.com",
    databaseURL: "https://fav-movies-63d08.firebaseio.com",
    projectId: "fav-movies-63d08",
    storageBucket: "",
    messagingSenderId: "443706078687",
    appId: "1:443706078687:web:0226e88ebbb0795d"
};
firebase.initializeApp(firebaseConfig);

window.firebase=firebase;
export const db = firebase.database()