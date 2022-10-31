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
  document.querySelector(".profile-txt").innerHTML = savedItemName + "'s Profile";
  document.getElementById("saved-name").innerHTML = ": " + savedItemName;
  document.getElementById("saved-email").innerHTML = ": " + savedItemEmail;

}
function getIndex(){
  localStorage.getItem("savedItemName");
  document.querySelector(".profile-txt").innerHTML = savedItemName + "'s Profile";
  document.getElementById("welcome1").innerHTML = "Hello, " + savedItemName;
}
//Header
  console.log(top);
  const header = document.querySelector(".navigation");

  window.addEventListener("scroll", () => {
    header.classList.toggle("navigation-change", window.scrollY > 100)
  }); 
//NavBar
bar = document.querySelector(".bar-btn");
bar.onclick = function(){
  navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active")
}

//Slide
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("categories-section");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}