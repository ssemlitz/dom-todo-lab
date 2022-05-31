const input = document.getElementById('inp')
const submitButton = document.getElementById('submit-button')
const resetButton = document.getElementById('reset-button')
const ul = document.getElementById('todo-list')

submitButton.addEventListener('click', addToList)
resetButton.addEventListener('click', reset)
ul.addEventListener('click', removeSingleItem)

function addToList() {
  const li = document.createElement('li')
  const inp = document.querySelector('input')
  
  if (inp.value === '') {
    return
  } else {
    li.textContent = inp.value 
    document.querySelector('ul').appendChild(li)
    inp.value = ''
  }
}

function reset() {
  ul.innerHTML = ''
  input.value = ''
}

function removeSingleItem(evt) {
  evt.target.remove()
}