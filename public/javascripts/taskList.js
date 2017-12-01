let items = []
let done = []

const node = document.getElementById('text')

node.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    let item = document.getElementById('text').value
    document.getElementById('text').value = ''
    items.push(item)
    document.getElementById('tasks').appendChild(makeItem(item))
  }
})

function makeItem (item) {
  let node = document.createElement('li')
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
  let label = document.createElement('label')
  label.id = 'label'
  label.htmlFor = 'id'
  label.addEventListener('click', function (event) {
    node.removeChild(event.target)
  })
  label.appendChild(document.createTextNode(item))
  node.appendChild(checkbox)
  node.appendChild(label)
  return node
}
