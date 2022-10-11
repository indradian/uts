var savedItem = localStorage.getItem("savedItem");
function change(){
  var name = prompt("Type your name");
    localStorage.setItem("savedItem", name);
    location.reload()
  
}
function getProfile(){
  localStorage.getItem("savedItem");
  document.getElementById("profile-txt").innerHTML = savedItem + "'s Profile";
  document.getElementById("saved-name").innerHTML = savedItem;

}
function getIndex(){
  localStorage.getItem("savedItem");
  document.getElementById("profile-txt").innerHTML = savedItem + "'s Profile";
  document.getElementById("saved-welcome").innerHTML = "Hello, " + savedItem;
}
