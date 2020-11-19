// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBcco-uLzu-KlPuurPkOtG6R1T4auxSfFQ",
    authDomain: "profileonbox.firebaseapp.com",
    databaseURL: "https://profileonbox.firebaseio.com",
    projectId: "profileonbox",
    storageBucket: "profileonbox.appspot.com",
    messagingSenderId: "254841380513",
    appId: "1:254841380513:web:2c37c82820091d29"
};

// Initialize Firebase
// const firebase_app =  firebase.initializeApp(firebaseConfig)

// const db = firebase_app.firestore()
// const auth = firebase_app.auth()
// const google_provider = new firebase.auth.GoogleAuthProvider()
// firebase.auth.GoogleAuthProvider
// firebase.auth().signInWithPopup
// firebase_app.auth().signInWithPopup

// export default {
//     db: firebase_app.firestore(),
//     auth: firebase_app.auth(),
//     app: firebase_app,
// }
export { firebaseConfig }