var savedItemName = localStorage.getItem("savedItemName");
var savedItemEmail = localStorage.getItem("savedItemEmail");
function changeName(){
  var name = prompt("Type your name");
    localStorage.setItem("savedItemName", name);
    location.reload()  
}
function changeEmail(){
  var email = prompt("Type your e-mail");
    localStorage.setItem("savedItemEmail", email);
    location.reload()  
}
function getProfile(){
  localStorage.getItem("savedItemName");
  localStorage.getItem("savedItemEmail");
  document.getElementById("profile-txt").innerHTML = savedItemName + "'s Profile";
  document.getElementById("saved-name").innerHTML = ": " + savedItemName;
  document.getElementById("saved-email").innerHTML = ": " + savedItemEmail;

}
function getIndex(){
  localStorage.getItem("savedItemName");
  document.getElementById("profile-txt").innerHTML = savedItemName + "'s Profile";
  document.getElementById("welcome1").innerHTML = "Hello, " + savedItemName;
}
//Header
const header = document.querySelector('.navigation');
window.onscroll = function(){
  var top = window.scrollY;
  console.log(top);
  if(top >= 650){
    header.classList.add('active')
  }else{
    header.classList.remove('active');
  }
}