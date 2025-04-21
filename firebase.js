const firebaseConfig = {
    apiKey: "AIzaSyDZzeTqBPd8gRQD5kwugokuHI4VCFytE_k",
    authDomain: "quiz-91b9a.firebaseapp.com",
    projectId: "quiz-91b9a",
    storageBucket: "quiz-91b9a.appspot.com",
    messagingSenderId: "860697559932",
    appId: "1:860697559932:web:f782aad12ed9ebaaed1af9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();