import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDRz_l4LgRyBd1uxa8lixr6-u9zFl62Ddc",
    authDomain: "discorde-clone-79ac0.firebaseapp.com",
    projectId: "discorde-clone-79ac0",
    storageBucket: "discorde-clone-79ac0.appspot.com",
    messagingSenderId: "27266731278",
    appId: "1:27266731278:web:fbe272c55f86e9e0fa9b5f",
    measurementId: "G-BB4QDXSMMP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth().GoogleAuthProvider()

  export { auth, provider }
  export default db;