let stats = document.querySelector(".status");
let text = document.getElementById("text");
let char = document.getElementById("char");
let words = document.getElementById("words");
let lines = document.getElementById("lines");
let symbols = document.getElementById("symbols");

function count() {
  if (text.value.length === 0) {
    stats.style.display = "none";
  } else {
    stats.style.display = "block";
    char.innerHTML = `${text.value.length} Characters`; //counting
    words.innerHTML = text.value.trim().split(/\s+/).length + " Words"; //spliting the string with one or more white spaces
    lines.innerHTML = text.value.split("\n").length + " Lines";
    symbols.innerHTML =
    text.value.split(/[!@#$%^&*+()_={};:'"<>~´`.,?/-]/).length - 1 + " Symbols";
  }
}

text.addEventListener("input", count);
