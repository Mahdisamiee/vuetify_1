import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBoAk_ER28e26slKrpfBjM5YB1CRCr88Ew",
    authDomain: "vuetify-1.firebaseapp.com",
    databaseURL: "https://vuetify-1.firebaseio.com",
    projectId: "vuetify-1",
    storageBucket: "vuetify-1.appspot.com",
    messagingSenderId: "638086173666",
    appId: "1:638086173666:web:f4f1228ef1628d18"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({timestampsInSnapshots : true})

export default db;