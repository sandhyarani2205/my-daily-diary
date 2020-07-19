import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBnQKTRMIpIPA-uTC04wphSGigiqMuHTAo",
    authDomain: "my-diary-db.firebaseapp.com",
    databaseURL: "https://my-diary-db.firebaseio.com",
    projectId: "my-diary-db",
    storageBucket: "my-diary-db.appspot.com",
    messagingSenderId: "1009420346869",
    appId: "1:1009420346869:web:ae207a8af00e26b1422cbc",
    measurementId: "G-F59SY3ELB8"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch {
            console.log('error');
        }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider  = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;