import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCfQP_Lv9OaWssQVzDq_g_L6xnigs9IZcw',
  authDomain: 'clone-sneha.firebaseapp.com',
  databaseURL: 'https://clone-sneha.firebaseio.com',
  projectId: 'clone-sneha',
  storageBucket: 'clone-sneha.appspot.com',
  messagingSenderId: '486904994175',
  appId: '1:486904994175:web:a8e679d7c7963fa07d624a',
  measurementId: 'G-P9FFLCGG0B',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
