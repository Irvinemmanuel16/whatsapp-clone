import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBGolCoOy4FrjPO8Zfg1Pfy8CO-GuyqRwY',
  authDomain: 'next-whatsapp-872d3.firebaseapp.com',
  projectId: 'next-whatsapp-872d3',
  storageBucket: 'next-whatsapp-872d3.appspot.com',
  messagingSenderId: '541532022302',
  appId: '1:541532022302:web:758d17b6dc885efd47300f',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
