const body = document.querySelector("body");
body.style.textAlign = "center";
body.style.fontFamily = "sans-serif";
const h3 = document.querySelector("h3");
h3.style.textAlign = "centre";
h3.style.width = "15rem";
h3.style.border = "2px solid #f6f7f8";
h3.style.boxShadow = "2px 2px 3px gray";
h3.style.padding = "0.5rem";
h3.style.margin = "10rem auto 2rem";

// box
let box = document.createElement("div");
document.body.addEventListener("keydown", (e) => {
  box.style.height = "4rem";
  box.style.width = "4rem";
  box.style.margin = "1rem auto";
  box.style.borderRadius = "3px";
  box.style.border = "2px solid #f6f7f8";
  box.style.boxShadow = "2px 2px 3px gray";
  box.style.color = "#69c185";
  box.style.padding = "1.2rem 0 0";
  box.style.fontSize = "2rem";
  box.style.fontWeight = "700";
  body.appendChild(box);
  box.textContent = e.keyCode;
  const key = document.createElement("span");
  key.textContent = event.key;
  key.style.color = "#69c185";
  h3.textContent = `You pressed `;
  h3.append(key);
});