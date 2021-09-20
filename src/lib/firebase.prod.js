import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAhsNXjFOJFRipYnjqA6FTJqxs5XeyPacA",
    authDomain: "netflix-9457d.firebaseapp.com",
    projectId: "netflix-9457d",
    storageBucket: "netflix-9457d.appspot.com",
    messagingSenderId: "254424065758",
    appId: "1:254424065758:web:554d78d5f3ae442063444f"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };