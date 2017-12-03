let todo = []
let done = []

const node = document.getElementById('text')

node.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    let task = document.getElementById('text').value
    document.getElementById('text').value = ''
    todo.push(task)
    document.getElementById('tasks').appendChild(createTask(task))
  }
})

function createTask (item) {
  let node = document.createElement('li')
  node.class = "todo-tasks"
  let checkbox = createCheckbox(item)
  let label = createLabel(item)
  node.appendChild(checkbox)
  node.appendChild(label)
  return node
}

function createCheckbox (item) {
  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.name = 'name'
  checkbox.class = 'check'
  checkbox.value = 'value'
  checkbox.id = item
  checkbox.addEventListener('click', function (event) {
    let id = event.target.id
    done.push(id)
    document.getElementById('tasks').removeChild(event.target.parentElement)
  })
  return checkbox
}

function createLabel (item) {
  let label = document.createElement('label')
  label.id = 'label'
  label.htmlFor = item
  label.appendChild(document.createTextNode(item))
  return label
}
