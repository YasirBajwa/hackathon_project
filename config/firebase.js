import firebase from 'firebase'
import {API_KEY,AUTH_DOMAIN,DATABASE_URL,PROJECT_ID,MESSAGE_SENDER_ID,APP_ID } from '@env'

const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	databaseURL: DATABASE_URL,
	projectId: PROJECT_ID,
	storageBucket: '',
	messagingSenderId: MESSAGE_SENDER_ID,
	appId: APP_ID
}
let Firebase = firebase.initializeApp(firebaseConfig)
  // Initialize Firebase
//    if (!firebase.apps.length) {
//     firebase.initializeApp({firebaseConfig});
// }

  export default Firebase