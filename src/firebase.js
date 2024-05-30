import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import toast from "react-hot-toast";
const notify = (message) => toast(message , setTimeout(1000));

const firebaseConfig = {
  apiKey: "AIzaSyCQSTTreOrWk89yoihozaeznlGoFmSp_0o",
  authDomain: "netflix-clone-twcss.firebaseapp.com",
  projectId: "netflix-clone-twcss",
  storageBucket: "netflix-clone-twcss.appspot.com",
  messagingSenderId: "275080643917",
  appId: "1:275080643917:web:c101867b903040b589a304",
  measurementId: "G-WEGQCPD02B",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const userCardientials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCardientials.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    if (error.code === "auth/invalid-email") {
      notify("Geçersiz e-posta adresi");
    } else if (error.code === "auth/email-already-in-use") {
      notify("E-posta adresi zaten kullanımda");
    }
    throw error;
  }
};

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.code);
    notify(error.code);
  }
};

const logout = async () => {
  signOut(auth);
};

export { signUp, signIn, logout, auth, db };
