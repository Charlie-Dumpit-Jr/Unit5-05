// sets value of the number 1 and 2
let num1 = 0
let num2 = 0
let answer = 0

// detects when button is clicked and calculates the answer
document.getElementById('results').addEventListener('click', solve)

// solves the area
function solve () {
  num1 = document.getElementById('lenght').value
  num2 = document.getElementById('width').value
  answer = num1 * num2
  document.getElementById('answer').innerHTML = answer
}
