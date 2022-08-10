import firebase from 'firebase'
import React, { useState } from 'react'
import { ref, getDownloadURL, uploadBytesResumable  } from 'firebase/storage'



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const singinWithGoogle = () => auth.signInWithPopup(provider);
export const storage = firebase.storage();

export const chatStorage = firebase.firestore();
export const chatAnalytics = firebase.analytics();

export default firebaseApp
