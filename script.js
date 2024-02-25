let mybutton = document.getElementById("myBtn");

window.onscroll = function() {  
  scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let text = 'Centrum Edukacji Zawodowej w Stalowej Woli';
  let container = document.querySelector('.subtitle');
container.textContent = '';

function typeText(text, container, index = 0) {
if (index < text.length) {
container.textContent += text[index];
setTimeout(() => typeText(text, container, index + 1), 100);
}
}
typeText(text, container);

window.onload = function() {
var map = L.map('map').setView([50.55640187553773, 22.043080329895023], 18); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([50.55640187553773, 22.043080329895023]).addTo(map); 
};

let hidden = document.getElementsByClassName('hidden-cards');

function show() {
  for(let i = 0; i < hidden.length; i++) {
  if(hidden[i].style.display == "block") {
  hidden[i].style.display = "none";
  } else {
  hidden[i].style.display = "block";
  }
  }
  }

let links = document.getElementsByTagName('a');

function toggleUnderline() {
for(let i = 0; i < links.length; i++) {
if(links[i].style.textDecoration == "underline") {
links[i].style.textDecoration = "none";
} else {
links[i].style.textDecoration = "underline";
}
}
}

var size_of_text = document.getElementsByTagName('body');

function toggleBigger() {
for(let i = 0; i < links.length; i++) {
if(size_of_text[i].style.fontSize == "larger") {
size_of_text[i].style.fontSize = "medium";
} else {
size_of_text[i].style.fontSize = "larger";
}
}
}
function toggleSmaller() {
for(let i = 0; i < links.length; i++) {
if(size_of_text[i].style.fontSize == "smaller") {
size_of_text[i].style.fontSize = "medium";
} else {
size_of_text[i].style.fontSize = "smaller";
}
}
}

var divs = document.getElementsByTagName('div');
var buttons = document.getElementsByClassName('nav-item');
var page_nav = document.getElementsByClassName('Page_navigation');

function toggleGarish() {
for(let i = 0; i < divs.length; i++) {
if(divs[i].style.backgroundColor == "yellow") {
divs[i].style.backgroundColor = "transparent";
divs[i].style.color = "black";
} else {
divs[i].style.backgroundColor = "yellow";
divs[i].style.color = "none";
}
}
}

let originalColors = [];

function toggleDark() {
for(let i = 0; i < divs.length; i++) {
if(divs[i].style.backgroundColor == "black") {
divs[i].style.backgroundColor = originalColors[i].bgColor;
divs[i].style.color = originalColors[i].textColor;
links[i].style.color = originalColors[i].linkColor;
} else {
originalColors[i] = {
    bgColor: divs[i].style.backgroundColor,
    textColor: divs[i].style.color,
    linkColor: links[i].style.color
};
divs[i].style.backgroundColor = "black";
divs[i].style.color = "yellow";
links[i].style.color = "yellow";
}
}
}

 function choose() {
                var select = document.getElementById("lista");
                var godzina = select.value;
                var osoba = select.options[select.selectedIndex].text;
                document.getElementById("pole").innerHTML = osoba + " " + "jest dostępna/y w" + " " + godzina ;
              }
