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
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ 
            purpose : "adding room name" 
      });
      localStorage.setItem("room_name", room_name);
      window.location = "Kwitter_page.html";
      
    }     
    
    getData();
    function getData() 
    {
      firebase.database().ref("/").on('value', function(snapshot)
        {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot)
          { 
          childKey  = childSnapshot.key;        
          
        
          console.log("The room name is " + childKey);
          row = "<div class='room_name' id=" + childKey + " onclick='redirectToRoomName(this.id)'>#" + childKey + "</div><hr>";
          
          document.getElementById("output").innerHTML = row;
          console.log("output");
        
          });
      
        });
    }

 
    
  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Kwitter_page.html" ;
  }
  
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }
    