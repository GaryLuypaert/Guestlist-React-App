import Rebase from 're-base';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCyFfmOQzLb7MPYqgIwEEsKLIRKgxGryIM",
    authDomain: "liste-invites.firebaseapp.com",
    databaseURL: "https://liste-invites.firebaseio.com",
    projectId: "liste-invites",
    storageBucket: "liste-invites.appspot.com",
    messagingSenderId: "428722706640"
  };

const app =  firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export {base}