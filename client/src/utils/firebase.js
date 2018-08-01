import firebase from 'firebase';
var config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
};

firebase.initializeApp(config);

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);
var auth = firebase.auth();
var storageRef = firebase.storage().ref();

export default {
  //gets household name where household equals the value passed to the function
  getHouseholdWhere: function(household) {
    return db.collection("households").where("name", "==", household).get()
  },

  //creates the user. may return error which needs to be handled by the file calling function
  createNewUser: function(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  //get current user info
  getUserInfo: function(){
    return firebase.auth().currentUser;
  },

  //creates a new household
  createNewHousehold: function(state) {
    console.log("We are going to create this once i figure out what that user object looks like");
  },

  // test function for collections
  getTest: (state) => {
    db.collection('test').get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        console.log('data', doc.data());
        console.log('doc', doc);
      })
    })
  },

  signUserOut: () => {
    firebase.auth().signOut();
  }
}