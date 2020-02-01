var firebaseConfig = {
    apiKey: "AIzaSyCIVTdA54Mpje59Q_rznAJr5k2mRaCdDco",
    authDomain: "website-5d7ff.firebaseapp.com",
    databaseURL: "https://website-5d7ff.firebaseio.com",
    projectId: "website-5d7ff",
    storageBucket: "website-5d7ff.appspot.com",
    messagingSenderId: "180645032290",
    appId: "1:180645032290:web:49a486625e78723f763c3b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();


db.collection("visitors").get().then((querySnapshot) => {
    let docs = querySnapshot.docs;
    let visits = docs[0].data().visits;

    let footer = document.getElementById("footer");
    let small = document.createElement("small");
    small.textContent = `visits ${visits}`
    footer.appendChild(small);
});