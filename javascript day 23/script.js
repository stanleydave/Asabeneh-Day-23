// text style
const header = document.querySelector("header");
header.style.marginTop = "2rem";
const h1 = document.querySelector("h1");
h1.style.color = "#69c185";
const h3 = document.querySelector("h3");
h3.style.marginTop = "-1rem";
const p = document.querySelector("p");
p.style.marginTop = "-1rem";

// div style
const div = document.querySelector(".container");
div.style.maxWidth = "70%";
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.margin = "2rem auto";
// is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const body = document.querySelector("body");
body.style.textAlign = "center";
// input
const input = document.querySelector("input");
console.log(input);
input.style.borderColor = "#69c185";
input.style.outlineColor = "#69c185";
input.style.width = "20rem";
input.style.padding = "0.5rem";

// button
const button = document.querySelector("button");
button.style.backgroundColor = "#69c185";
button.style.color = "white";
button.style.padding = "0.5rem";
button.style.borderColor = "#69c185";
button.style.marginLeft = "1rem";

function generate() {
  const alert = document.getElementById("alert");
  alert.style.color = "red";
  let title;
  if (isNaN(input.value)) {
    alert.textContent = "Enter only number values";
  }
  if (input.value === "") {
    alert.textContent = "Field is required";
  }
  if (isNaN(input.value) === false) {
    alert.textContent = "";
  }
  for (let i = 0; i < input.value; i++) {
    title = document.createElement("div");
    title.className = "title";
    title.style.fontSize = "2.5rem";
    title.textContent = i;
    title.style.color = "white";
    title.style.width = "2rem";
    title.style.padding = "1rem 2rem";
    title.style.display = "inline";
    title.style.margin = "3px";
    div.appendChild(title);
    if (isPrime(i)) title.style.backgroundColor = "red";
    else if (i % 2 === 1) title.style.backgroundColor = "yellow";
    else {
      title.style.backgroundColor = "green";
    }
  }
}