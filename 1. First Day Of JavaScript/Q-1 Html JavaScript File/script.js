// Welcome message
alert("Welcome To The JavaScript")
document.getElementById('welcome-message').innerHTML = 'Welcome to the arithmetic operations page!';

// Declare variables
var name = 'John Doe';
let age = 30;
const country = 'USA';

console.log(name);
console.log(age);
console.log(country);

// Arithmetic operations
document.getElementById('calculate-btn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers!');
        return;
    }

    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;

    document.getElementById('result').innerHTML = `
        Addition: ${addition}<br>
        Subtraction: ${subtraction}<br>
        Multiplication: ${multiplication}<br>
        Division: ${division}
    `;
});