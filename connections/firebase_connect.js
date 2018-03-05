const firebase = require('firebase');
require('dotenv').config();

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: "memberadmin-c587a.appspot.com",
  // messagingSenderId: "381105359940"
};
firebase.initializeApp(config);

module.exports =  firebase;