import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCD-0f7SWqfoy93oC8TBPJshWLxT_Y9_6M",
  authDomain: "motivational-app-7b650.firebaseapp.com",
  projectId: "motivational-app-7b650",
  storageBucket: "motivational-app-7b650.appspot.com",
  messagingSenderId: "50747089629",
  appId: "1:50747089629:web:43ebb0afdc53c1d9e23134",
  measurementId: "G-0J8E42NV20",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase.firestore();
