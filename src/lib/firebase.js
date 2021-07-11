import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDkC4XMoorhDHcOrXalhoFnOtUnKNpSRrM',
  authDomain: 'instagram-a11d2.firebaseapp.com',
  projectId: 'instagram-a11d2',
  storageBucket: 'instagram-a11d2.appspot.com',
  messagingSenderId: '87302482417',
  appId: '1:87302482417:web:8d221022e7cf9f5035fc50'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where to call the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, FieldValue };
