import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
          apiKey: "AIzaSyB3mEopVwfbyTsbgSSr6Wupknz5tMJ4a68",
          authDomain: "salem-throws.firebaseapp.com",
          projectId: "salem-throws",
          storageBucket: "salem-throws.appspot.com",
          messagingSenderId: "526456176126",
          appId: "1:526456176126:web:fbd3f6c7db0f20472914af",
          measurementId: "G-9TRKSE5X2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);




