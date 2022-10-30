
// THIS IS THE NAVBAR COLLAPSE CODE
// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}



// THIS IS THE NAVBAR ITEM SELLECTION CODE
// Get the container element
var btnContainer = document.getElementById("navlist");

// Get all buttons with class="nav-items" inside the container
var btns = btnContainer.getElementsByClassName("nav-items");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-page");
    current[0].className = current[0].className.replace(" active-page", "");
    this.className += " active-page";
  });
}



// THIS IS THE CATEGORY ITEM SELLECTION CODE
// Get the container element
var btnContainer = document.getElementById("category-list");

// Get all buttons with class="category-items" inside the container
var btns = btnContainer.getElementsByClassName("category-items");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-category");
    current[0].className = current[0].className.replace(" active-category", "");
    this.className += " active-category";
  });
}



// THIS IS THE SMOOTH SCROLLING CODE
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


let burgerIcon = document.getElementsByClassName("bi-list")[0];
var burgerDrop = document.getElementById("navlist");
function myFunction() {
  if (burgerDrop.style.visibility === "visible") {
    burgerDrop.style.visibility = "hidden";
    burgerIcon.style.color = "#BBBBBB";
  } else {
    burgerDrop.style.visibility = "visible";
    burgerIcon.style.color = "#000000";
  }
}


let slideIndex1 = 1;
showSlides1(slideIndex1);
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}
function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("slide-img-1");
  let dots1 = document.getElementsByClassName("dot-1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}
function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("slide-img-2");
  let dots2 = document.getElementsByClassName("dot-2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}


let slideIndex3 = 1;
showSlides3(slideIndex3);
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}
function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("slide-img-3");
  let dots3 = document.getElementsByClassName("dot-3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
}

let slideIndex4 = 1;
showSlides4(slideIndex4);
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}
function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}
function showSlides4(n) {
  let i;
  let slides4 = document.getElementsByClassName("slide-img-4");
  let dots4 = document.getElementsByClassName("dot-4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  for (i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots4[slideIndex4-1].className += " active";
}


let slideIndex5 = 1;
showSlides5(slideIndex5);
function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}
function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}
function showSlides5(n) {
  let i;
  let slides5 = document.getElementsByClassName("slide-img-5");
  let dots5 = document.getElementsByClassName("dot-5");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  for (i = 0; i < dots5.length; i++) {
    dots5[i].className = dots5[i].className.replace(" active", "");
  }
  slides5[slideIndex5-1].style.display = "block";
  dots5[slideIndex5-1].className += " active";
}


let slideIndex6 = 1;
showSlides6(slideIndex6);
function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}
function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}
function showSlides6(n) {
  let i;
  let slides6 = document.getElementsByClassName("slide-img-6");
  let dots6 = document.getElementsByClassName("dot-6");
  if (n > slides6.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = slides6.length}
  for (i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";
  }
  for (i = 0; i < dots6.length; i++) {
    dots6[i].className = dots6[i].className.replace(" active", "");
  }
  slides6[slideIndex6-1].style.display = "block";
  dots6[slideIndex6-1].className += " active";
}


let slideIndex7 = 1;
showSlides7(slideIndex7);
function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}
function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}
function showSlides7(n) {
  let i;
  let slides7 = document.getElementsByClassName("slide-img-7");
  let dots7 = document.getElementsByClassName("dot-7");
  if (n > slides7.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = slides7.length}
  for (i = 0; i < slides7.length; i++) {
    slides7[i].style.display = "none";
  }
  for (i = 0; i < dots7.length; i++) {
    dots7[i].className = dots7[i].className.replace(" active", "");
  }
  slides7[slideIndex7-1].style.display = "block";
  dots7[slideIndex7-1].className += " active";
}

let slideIndex8 = 1;
showSlides8(slideIndex8);
function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}
function currentSlide8(n) {
  showSlides8(slideIndex8 = n);
}
function showSlides8(n) {
  let i;
  let slides8 = document.getElementsByClassName("slide-img-8");
  let dots8 = document.getElementsByClassName("dot-8");
  if (n > slides8.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = slides8.length}
  for (i = 0; i < slides8.length; i++) {
    slides8[i].style.display = "none";
  }
  for (i = 0; i < dots8.length; i++) {
    dots8[i].className = dots8[i].className.replace(" active", "");
  }
  slides8[slideIndex8-1].style.display = "block";
  dots8[slideIndex8-1].className += " active";
}

let slideIndex9 = 1;
showSlides9(slideIndex9);
function plusSlides9(n) {
  showSlides9(slideIndex9 += n);
}
function currentSlide9(n) {
  showSlides9(slideIndex9 = n);
}
function showSlides9(n) {
  let i;
  let slides9 = document.getElementsByClassName("slide-img-9");
  let dots9 = document.getElementsByClassName("dot-9");
  if (n > slides9.length) {slideIndex9 = 1}
  if (n < 1) {slideIndex9 = slides9.length}
  for (i = 0; i < slides9.length; i++) {
    slides9[i].style.display = "none";
  }
  for (i = 0; i < dots9.length; i++) {
    dots9[i].className = dots9[i].className.replace(" active", "");
  }
  slides9[slideIndex9-1].style.display = "block";
  dots9[slideIndex9-1].className += " active";
}



particlesJS("particles-js", 
{"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},
"color":{"value":"#000000"},
"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
"line_linked":{"enable":true,"distance":150,"color":"#000000","opacity":0.4,"width":1},
"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},
"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
"retina_detect":true});



let artwork1 = document.getElementsByClassName("artwork-open-1")[0];
let artwork2 = document.getElementsByClassName("artwork-open-2")[0];
let artwork3 = document.getElementsByClassName("artwork-open-3")[0];
let artwork4 = document.getElementsByClassName("artwork-open-4")[0];
let artwork5 = document.getElementsByClassName("artwork-open-5")[0];
let artwork6 = document.getElementsByClassName("artwork-open-6")[0];
let artwork7 = document.getElementsByClassName("artwork-open-7")[0];
let artwork8 = document.getElementsByClassName("artwork-open-8")[0];
let artwork9 = document.getElementsByClassName("artwork-open-9")[0];

function closeGrid() {
  artwork1.style.visibility = "hidden";
  artwork2.style.visibility = "hidden";
  artwork3.style.visibility = "hidden";
  artwork4.style.visibility = "hidden";
  artwork5.style.visibility = "hidden";
  artwork6.style.visibility = "hidden";
  artwork7.style.visibility = "hidden";
  artwork8.style.visibility = "hidden";
  artwork9.style.visibility = "hidden";
}

function openGrid1() {
  artwork1.style.visibility = "visible";
}

function openGrid2() {
  artwork2.style.visibility = "visible";
}

function openGrid3() {
  artwork3.style.visibility = "visible";
}

function openGrid4() {
  artwork4.style.visibility = "visible";
}

function openGrid5() {
  artwork5.style.visibility = "visible";
}

function openGrid6() {
  artwork6.style.visibility = "visible";
}

function openGrid7() {
  artwork7.style.visibility = "visible";
}

function openGrid8() {
  artwork8.style.visibility = "visible";
}

function openGrid9() {
  artwork9.style.visibility = "visible";
}