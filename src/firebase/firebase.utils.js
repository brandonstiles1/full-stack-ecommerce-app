import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBQ79blp2POFIEao5pZlcxFjnUvW2UwJ0M",
  authDomain: "ecommerce-project-1aab2.firebaseapp.com",
  databaseURL: "https://ecommerce-project-1aab2.firebaseio.com",
  projectId: "ecommerce-project-1aab2",
  storageBucket: "ecommerce-project-1aab2.appspot.com",
  messagingSenderId: "504697716528",
  appId: "1:504697716528:web:09312ffcaeafa9493792f5",
  measurementId: "G-HY27SXBE0H"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;