let operation = [];
let results = 0;
const screen = document.querySelector(".screen");
const del = document.querySelector("#delete");
let newOperation = false;

//borrar ultimo elemento del array
function eliminar() {
  operation.pop();
  screen.textContent = screen.textContent.substring(
    0,
    screen.textContent.length - 1
  );
}

//operadores
const sum = document.querySelector("#sum");
const rest = document.querySelector("#rest");
const mult = document.querySelector("#mult");
const div = document.querySelector("#div");
const equal = document.querySelector("#equal");

function suma() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("+");
  screen.textContent += "+";
}

function resta() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("-");
  screen.textContent += "-";
}

function multiplicacion() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("*");
  screen.textContent += "*";
}
function division() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("/");
  screen.textContent += "/";
}
function igual() {
  if(operation[0] === "+" || "-" || "*" || "/"){
    operation.shift();
  }
  results = eval(operation.join(""));
  screen.textContent = results;
  newOperation = true;
  operation = [];
}

//numeros
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

function cero() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("0");
  screen.textContent += "0";
}
function uno() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("1");
  screen.textContent += "1";
}
function dos() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("2");
  screen.textContent += "2";
}
function tres() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("3");
  screen.textContent += "3";
}
function cuatro() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("4");
  screen.textContent += "4";
}
function cinco() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("5");
  screen.textContent += "5";
}
function seis() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("6");
  screen.textContent += "6";
}
function siete() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("7");
  screen.textContent += "7";
}
function ocho() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("8");
  screen.textContent += "8";
}
function nueve() {
  if (newOperation === true) {
    screen.textContent = " ";
    newOperation = false;
  }
  operation.push("9");
  screen.textContent += "9";
}

//eventos

sum.addEventListener("click", suma);
rest.addEventListener("click", resta);
mult.addEventListener("click", multiplicacion);
div.addEventListener("click", division);
equal.addEventListener("click", igual);

del.addEventListener("click", eliminar);


zero.addEventListener("click", cero);
one.addEventListener("click", uno);
two.addEventListener("click", dos);
three.addEventListener("click", tres);
four.addEventListener("click", cuatro);
five.addEventListener("click", cinco);
six.addEventListener("click", seis);
seven.addEventListener("click", siete);
eight.addEventListener("click", ocho);
nine.addEventListener("click", nueve);
