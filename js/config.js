const firebaseConfig = {
  apiKey: "AIzaSyCGowlHLBb-dg9bpmo1oDb0PEe-pGiJol8",
  authDomain: "english-coaching-member-a3c67.firebaseapp.com",
  projectId: "english-coaching-member-a3c67",
  storageBucket: "english-coaching-member-a3c67.firebasestorage.app",
  messagingSenderId: "22360558331",
  appId: "1:22360558331:web:1a19fc67737e4236eb3e5e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const COURSE_LABELS = {
  keizokusei: '継続生コース',
  '0ki': '0期生',
  '1ki': '1期生',
  common: '全コース共通'
};
