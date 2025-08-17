let currentInput = 'id1'; // default input box

function insert(num) {
  const input = document.getElementById(currentInput);
  input.value += num;
}

function switchInput() {
  currentInput = (currentInput === 'id1') ? 'id2' : 'id1';
  alert("Now typing in: " + currentInput);
}

function add() {
  var a = parseFloat(document.getElementById("id1").value) || 0;
  var b = parseFloat(document.getElementById("id2").value) || 0;
  alert("Sum: " + (a + b));
}

function sub() {
  var a = parseFloat(document.getElementById("id1").value) || 0;
  var b = parseFloat(document.getElementById("id2").value) || 0;
  alert("Difference: " + (a - b));
}

function div() {
  var a = parseFloat(document.getElementById("id1").value) || 0;
  var b = parseFloat(document.getElementById("id2").value) || 0;
  if (b === 0) {
    alert("Cannot divide by zero!");
  } else {
    alert("Quotient: " + (a / b));
  }
}

function mul() {
  var a = parseFloat(document.getElementById("id1").value) || 0;
  var b = parseFloat(document.getElementById("id2").value) || 0;
  alert("Product: " + (a * b));
}

function clearFields() {
  document.getElementById("id1").value = "";
  document.getElementById("id2").value = "";
  currentInput = 'id1';
}
