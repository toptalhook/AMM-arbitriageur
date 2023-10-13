import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCvKgidgDcBCWftezQj7vb1cN6skp7Cu3g",
  authDomain: "arbitrage-database.firebaseapp.com",
  projectId: "arbitrage-database",
  databaseURL: "https://arbitrage-database-default-rtdb.firebaseio.com",
  storageBucket: "arbitrage-database.appspot.com",
  messagingSenderId: "349806992720",
  appId: "1:349806992720:web:e48c5166550b4baccaa055",
  measurementId: "G-QK20BB3S1P"
};
let seconddb;
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  seconddb = firebase.initializeApp(firebaseConfig, "arbitrage"); // if already initialized, use that one
}
firebase.analytics();

export const database = seconddb.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;
