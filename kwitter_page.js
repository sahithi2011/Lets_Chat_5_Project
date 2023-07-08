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

  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    document.getElementById("UserName").innerHTML =  user_name ;
    document.getElementById("roomName").innerHTML =  room_name ;
    
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message : msg,
       like:0    
      });
      document.getElementById("msg").value="";




    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

            console.log(firebase_message_id);
            console.log(message_data);
            name = message_data['name'];
            message = message_data['message'];
            like = message_data['like'];
            name_with_tag = `<h4>${name}<img src='tick.png' width=20px > : </h4>`;
            message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
            like_button="<button class='btn btn-warning' id="+ firebase_message_id+ " value=" +like+" onclick='updateLike(this.id)'>"+"<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
            row = name_with_tag+message_with_tag+like_button;
            document.getElementById("output").innerHTML+= row;

      } });  }); }
getData();


function updateLike(message_id){
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
            
      });
      
}


function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
window.location = "index.html";
}

function back(){
      window.location = "kwitter_room.html";
}