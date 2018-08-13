import firebase from "firebase";
var config = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR DOMAIN",
  databaseURL: "YOUR URL",
  projectId: "YOUR ID",
  storageBucket: "YOUR BUCKET",
  messagingSenderId: "YOUR SENDER ID"
};
firebase.initializeApp(config);

export const remove = ref => {
  firebase
    .database()
    .ref(ref)
    .remove()
    .then(() => {
      console.log("remove");
    });
};
export const read_r =(ref,fun) => {
 firebase
    .database()
    .ref(ref)
    .on("value", d =>fun(d.toJSON()));
};
export const read_n =ref => {
firebase
    .database()
    .ref(ref)
    .once("value", d =>fun(d.toJSON()));
};
export const update = (ref, data) => {
firebase
    .database()
    .ref(ref)
    .update(data)
};
