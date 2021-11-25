import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZcgSLGYixetfeVh1EE2x0qg1wOC3pqY8",
  authDomain: "comision19765meligise.firebaseapp.com",
  projectId: "comision19765meligise",
  storageBucket: "comision19765meligise.appspot.com",
  messagingSenderId: "99953348736",
  appId: "1:99953348736:web:d36bda34ae9567f55d9665"
};

const app = firebase.initializeApp(firebaseConfig);

// Agregando nuestras funciones

export function getFireStore() {
  return firebase.firestore(app);
}
