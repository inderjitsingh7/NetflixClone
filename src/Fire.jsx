import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




export const firebaseConfig = {
    apiKey: "AIzaSyCuvmyMVBd9J4sr8cbCgNUyCaJl2VpZrwM",
    authDomain: "netflix-clone-ea491.firebaseapp.com",
    projectId: "netflix-clone-ea491",
    storageBucket: "netflix-clone-ea491.appspot.com",
    messagingSenderId: "404017147733",
    appId: "1:404017147733:web:add79a1f522333d1df89dc",
    measurementId: "G-68VR9PFXWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);