const firebaseConfig = {
  apiKey: "AIzaSyDkFWVomBVdIuXPNpSH9aUTxQz-tD0064s",
  authDomain: "kwitterfirebase-c7ad9.firebaseapp.com",
  databaseURL: "https://kwitterfirebase-c7ad9-default-rtdb.firebaseio.com",
  projectId: "kwitterfirebase-c7ad9",
  storageBucket: "kwitterfirebase-c7ad9.appspot.com",
  messagingSenderId: "163871102061",
  appId: "1:163871102061:web:f832d1340d44be1e901b64",
  measurementId: "G-VG1WBHQ1H1"
};
 firebase.initializeApp(firebaseConfig);

function addUser(){
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  window.location = "kwitter_room.html"
}







