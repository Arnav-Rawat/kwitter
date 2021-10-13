var firebaseConfig = {
    apiKey: "AIzaSyCwC-fCEqb4ZNPmMAiPg4AZgXBpF44YCi8",
    authDomain: "kwitter-chat-proj.firebaseapp.com",
    projectId: "kwitter-chat-proj",
    storageBucket: "kwitter-chat-proj.appspot.com",
    messagingSenderId: "336144727505",
    appId: "1:336144727505:web:ee105c5436f53d7b92f4f0",
    measurementId: "G-JKB82GM1R7"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}