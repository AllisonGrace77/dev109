var table;  // Unit of table
var valid = false; 
while(valid === false){
  var temp = prompt("Enter an integer between 0 and 10");
  if((0<=temp)&&(10>=temp)&&(Number.isInteger(temp))){
    valid=true;
  }
}
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';// Message

if (operator === 'multiplication') {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
