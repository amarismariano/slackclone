import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwrc3-1iWTOG9Y9E4uDy5Q_tvrwuRhmp0",
  authDomain: "slack-eudes-clone.firebaseapp.com",
  projectId: "slack-eudes-clone",
  storageBucket: "slack-eudes-clone.appspot.com",
  messagingSenderId: "725931545272",
  appId: "1:725931545272:web:7248f7db47ec3a054e1a4d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
