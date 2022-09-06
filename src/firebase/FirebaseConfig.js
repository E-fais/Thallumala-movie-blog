import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCBe1D6WbUkGXqVW60OaT3t_e_RNouHoa4",
  authDomain: "thallumala-e836b.firebaseapp.com",
  projectId: "thallumala-e836b",
  storageBucket: "thallumala-e836b.appspot.com",
  messagingSenderId: "868008421863",
  appId: "1:868008421863:web:c56dc1583984efb0bf3542",
  measurementId: "G-S86CYZ649Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export  const auth=getAuth(app)
export const db=getFirestore(app)
export const provider=new GoogleAuthProvider()