// Firebase configuration placeholder
const firebaseConfig = {
  // your config
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.getAuth(app);
const db = firebase.getFirestore(app);

// Redirect non-admin users
firebase.onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = '/index.html';
    return;
  }
  const docRef = firebase.doc(db, 'users', user.uid);
  const docSnap = await firebase.getDoc(docRef);
  if (!docSnap.exists() || docSnap.data().role !== 'Admin') {
    window.location.href = '/index.html';
  }
});

// Placeholder functions for CRUD operations
function addProduct(data) {
  // firebase.firestore write example
}

function addEvent(data) {
  // firebase.firestore write example
}

function updateUserCoins(uid, amount, type) {
  // update coins and log transaction
}

function verifyUPI(id, approve) {
  // update manual payment status
}
