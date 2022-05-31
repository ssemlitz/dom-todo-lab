const input = document.getElementById('inp')
const button = document.getElementById('submit-button')
const ul = document.getElementById('todo-list')

button.addEventListener('click', addToList)

function addToList() {
  const li = document.createElement('li')
  const inp = document.querySelector('input')
  li.textContent = inp.value 
  document.querySelector('ul').appendChild(li)
  inp.value = ''
}