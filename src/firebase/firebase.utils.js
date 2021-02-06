import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQ7AYrJB_8hW0XaumSi5hzuJkNOUvE_yQ",
    authDomain: "crown-clothing-29093.firebaseapp.com",
    projectId: "crown-clothing-29093",
    storageBucket: "crown-clothing-29093.appspot.com",
    messagingSenderId: "738530165030",
    appId: "1:738530165030:web:7e8e85aaa8f310b3e741e7"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;