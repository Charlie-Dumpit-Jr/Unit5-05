let num1 = 0
let num2 = 0
let answer = 0

document.getElementById('results').addEventListener('click', solve)

function solve() {
  
  num1 = document.getElementById('lenght').value
  num2 = document.getElementById('width').value
  answer = num1 * num2
  alert(answer)
  document.getElementById('answer').innerHTML = answer
}