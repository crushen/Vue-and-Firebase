import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ 
    apiKey: "AIzaSyDy257iR_dQSyyL6j-GUrUmw6UHbLXZkHE",
    authDomain: "exchangario.firebaseapp.com",
    databaseURL: "https://exchangario.firebaseio.com",
    projectId: "exchangario",
    storageBucket: "exchangario.appspot.com",
    messagingSenderId: "792054349400",
    appId: "1:792054349400:web:1cdf2ffb48fe0a561f542d"
  })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
