var sidemenu = document.getElementById("slidemenu");
var blueDiv = document.getElementById("blue-div");
var createInviteRow = document.getElementById("create-an-invite");
function openSlideMenu() {
  sidemenu.style.transform = "translateX(0)";
  blueDiv.style.filter = "brightness(70%)";
  createInviteRow.style.filter = "brightness(70%)";
}

var crossButton = document.getElementsByClassName("cross");
function crossMenu() {
  sidemenu.style.transform = "translateX(330px)";
  blueDiv.style.filter = "brightness(100%)";
  createInviteRow.style.filter = "brightness(100%)";
}

var menuList = document.querySelectorAll(".menu-list li");
function menuClick(x) {
  var menuElement = document.getElementById(x);
  menuList.forEach((item) => item.classList.remove("active"));
  menuElement.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var rows = document.querySelectorAll(".scrolling");
  var i = 0;
  function animationFadeIn() {
    var winHeight = screen.height;
    var elementTop = rows[i].getBoundingClientRect().top;

    if (elementTop < winHeight * 0.7) {
      rows[i].classList.add("animateFade");
      i++;
    }
  }
  window.addEventListener("scroll", animationFadeIn);
  animationFadeIn();
});
