import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import firebase from "../db/firebaseCredentials.js";

initializeApp({
    credential: cert(firebase)
})

const db = getFirestore();

export default db;

// termine haciendo un adicional, porque al importar las credenciales, fallaba la conexion