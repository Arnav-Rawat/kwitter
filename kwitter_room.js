var firebaseConfig = {
  apiKey: "AIzaSyCxMNTKNb8hVgu5CNtOqTXoCpjdOgHymA4",
  authDomain: "kwitter-48ebe.firebaseapp.com",
  databaseURL: "https://kwitter-48ebe.firebaseio.com",
  projectId: "kwitter-48ebe",
  storageBucket: "kwitter-48ebe.appspot.com",
  messagingSenderId: "1060714411512",
  appId: "1:1060714411512:web:66b3e23aed9ca5b4df920d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");

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