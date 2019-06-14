const firebase = require('firebase');
var config = {
    apiKey: "AIzaSyCnZU_ng3Q5BX4L_JQYsjRU67jRiYE99ZQ",
    authDomain: "emg-proj-demo.firebaseapp.com",
    databaseURL: "https://emg-proj-demo.firebaseio.com",
    projectId: "emg-proj-demo",
    storageBucket: "emg-proj-demo.appspot.com",
    messagingSenderId: "517900685999"
  };
  firebase.initializeApp(config);

module.exports = firebase;