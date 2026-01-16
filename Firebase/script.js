// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR2pd11XJ_RN0vIcISgOjMgi6pSaIZsng",
  authDomain: "authproject-d3874.firebaseapp.com",
  databaseURL: "https://authproject-d3874-default-rtdb.firebaseio.com",
  projectId: "authproject-d3874",
  storageBucket: "authproject-d3874.firebasestorage.app",
  messagingSenderId: "767207819216",
  appId: "1:767207819216:web:1823127f01d11248459bd5",
  measurementId: "G-V44G4BK3VV",
};

//initializerFirebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const dbRef = firebase.database().ref("users");

//register functionality
const registerEmail = document.getElementById("signupEmail");
const registerEPassword = document.getElementById("signupPassword");
const btnRegister = document.getElementById("btnSingUp");

// add event handler to register button
btnRegister?.addEventListener("click", (e) => {
  e.preventDefault();

  //read the value of the form
  const email = registerEmail.value;
  const password = registerEPassword.value;

  console.log(email, password);

  //register user in to firebase
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((credentials) => {
      console.log("this is the credential ", credentials);
      uid = credentials.user.uid;
      console.log("user created", uid);
    })
    .catch((error) => {
      console.log(error);
    });
});

//login functionality
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const btnLogin = document.getElementById("btnLogin");

btnLogin?.addEventListener("click", (e) => {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;

  console.log(email, password);

  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(cred);
      console.log("User is logged in");
    })
    .catch((e) => {
      console.log(e);
    });
});

//Real time database

function getFormInput(id) {
  return document.getElementById(id).value;
}

function postToFirebase(obj) {
  var ref = firebase.database().ref("user").push();

  ref.set({
    name: obj.name,
    email: obj.email,
    phone: obj.phone,
    comment: obj.comment,
  });
}

function submitForm(e) {
  e.preventDefault();
  var phoneNum = getFormInput("phone");
  var obj = {
    name: getFormInput("firstName"),
    email: getFormInput("email"),
    phone: phoneNum.replace(/-/g, ""),
    comment: getFormInput("comment"),
  };
  console.log("before");
  postToFirebase(obj);
  console.log("posted");
}

document.getElementById("submit")?.addEventListener("click", submitForm);
