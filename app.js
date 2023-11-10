var firebaseConfig = {
  apiKey: "AIzaSyB0wkHv_O-s35FvTdvXx9mjwsduH0Adiyo",
  authDomain: "newlogin-f2d39.firebaseapp.com",
  projectId: "newlogin-f2d39",
  storageBucket: "newlogin-f2d39.appspot.com",
  messagingSenderId: "858631620932",
  appId: "1:858631620932:web:38f03394f170dbc40def11"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);


/* ******************* Sign in Code ******************** */

function signIn() {

  var email = document.getElementById("email");
  var passw = document.getElementById("pass");
  
  firebase.auth().signInWithEmailAndPassword(email.value, passw.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });

    

};

/* ******************* Sign Up Code ******************** */

function signUp() {


  var email = document.getElementById("email");
  var passw = document.getElementById("pass");

  firebase.auth().createUserWithEmailAndPassword(email.value, passw.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)

    firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
    alert("Varification email sent..........")

    // Email verification sent!
    // ...
  });


  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

};

/* ******************* Forgot Password Code ******************** */

function forGotPassword() {

  var email = document.getElementById("email");

  firebase.auth().sendPasswordResetEmail(email.value)
  .then(() => {
    alert("Password reset email sent..............")

    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
}


/* ******************* Sign Up with Google Account Code ******************** */

function gowithGoogle() {
  alert("google Verification")

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });



}


/* ******************* Sign Up with Github Account Code ******************** */

function gowithGithub() {
 alert("github Verification")
  var provider = new firebase.auth.GithubAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    console.log(errorMessage);
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}