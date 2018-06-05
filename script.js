var css = document.querySelector("h3");
var col1 = document.querySelector(".colora");
var col2 = document.querySelector(".colorb");
var body = document.getElementById("body");

function colpicker() {
body.style.background = "linear-gradient(to right, " + col1.value + "," + col2.value + ")";
css.textContent = body.style.background + ";";
}
col1.addEventListener("input", colpicker);
col2.addEventListener("input", colpicker);