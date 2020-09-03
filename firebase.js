import firebase from "firebase";


const firebaseApp= firebase.initializeApp({
	
	  apiKey: "AIzaSyDo3xo6TtKpMENB9q6ubEHAMbZMRu5C6Kw",
	  authDomain: "todo-app-5c229.firebaseapp.com",
	  databaseURL: "https://todo-app-5c229.firebaseio.com",
	  projectId: "todo-app-5c229",
	  storageBucket: "todo-app-5c229.appspot.com",
	  messagingSenderId: "904316740359",
	  appId: "1:904316740359:web:bd9d8456291423efa95ba2",
	  measurementId: "G-1YYYKS8NF8"

})

const db= firebaseApp.firestore();



export default db;
