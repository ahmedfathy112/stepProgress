let btnNext1 = document.getElementById("btn1");
let btnNext2 = document.getElementById("btnNext2");
let btnNext3 = document.getElementById("btnNext3");
let btnPrev1 = document.getElementById("btnPrev2");
let btnPrev2 = document.getElementById("btnPrev3");

let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");
let sec3 = document.getElementById("sec3");

let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");

let stepColor1 = document.getElementById("stepColor1");
let stepColor2 = document.getElementById("stepColor2");
let stepColor3 = document.getElementById("stepColor3");

btnNext1.addEventListener("click", () => {
  sec1.style.display = "none";
  sec2.style.display = "flex";
  stepColor1.style.backgroundColor = "#2335b4";
  stepColor2.style.backgroundColor = "#2335b4";
  stepColor2.style.color = "#fff";
});

btnPrev1.addEventListener("click", () => {
  sec1.style.display = "flex";
  sec2.style.display = "none";
  stepColor2.style.backgroundColor = "rgb(163, 158, 158)";
  stepColor1.style.backgroundColor = "#2335b4";
  stepColor1.style.color = "#fff";
});

btnNext2.addEventListener("click", () => {
  sec1.style.display = "none";
  sec2.style.display = "none";
  sec3.style.display = "flex";
  stepColor2.style.backgroundColor = "#2335b4";
  stepColor1.style.backgroundColor = "#2335b4";
  stepColor3.style.backgroundColor = "#2335b4";
  stepColor3.style.color = "#fff";
});

btnPrev2.addEventListener("click", () => {
  sec1.style.display = "none";
  sec2.style.display = "flex";
  sec3.style.display = "none";
  stepColor1.style.backgroundColor = "#2335b4";
  stepColor2.style.backgroundColor = "#2335b4";
  stepColor1.style.color = "#fff";
  stepColor3.style.backgroundColor = "rgb(163, 158, 158)";
});

btnNext3.addEventListener("click", () => {
  alert("thank you for time");
});
