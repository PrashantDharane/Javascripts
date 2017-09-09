var calculate = function(number1, number2, callback){
  if (typeof callback == "function"){
    return callback(number1,number2);
  }else {
    console.log("No callback found");
  }
}


var add = function (number1,number2) {
  return number1 + number2;
}

var substract = function (number1,number2){
  return number1 - number2;
}


var multiply = function (number1,number2){
  return number1 * number2;
}

function calculateAll() {
  var num1 = document.getElementById('number1').value;
  var num2 = document.getElementById('number2').value;
  console.log(num1);
  var addition = calculate(parseInt(num1),parseInt(num2),add);
  document.getElementById('addId').innerHTML = addition;
  var substraction = calculate(num1,num2,substract);
  document.getElementById('subsId').innerHTML = substraction;
  var multiplication = calculate(num1,num2,multiply);
  document.getElementById('multiId').innerHTML = multiplication;
}
