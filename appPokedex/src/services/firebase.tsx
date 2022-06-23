import { initializeApp } from 'firebase/app';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB3SQ-DGPYQH_FOH8r-x_hgNFYb4yNj2nE",
    authDomain: "fir-react-61eef.firebaseapp.com",
    databaseURL: "https://fir-react-61eef-default-rtdb.firebaseio.com",
    projectId: "fir-react-61eef",
    storageBucket: "fir-react-61eef.appspot.com",
    messagingSenderId: "22516454624",
    appId: "1:22516454624:web:b724a8d7198c97104eec85"
  };

  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  const database = getDatabase(app);

export { provider, database  }