let items = []

const node = document.getElementById('text')

node.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    let item = document.getElementById('text').value
    document.getElementById('text').value = ''
    items.push(item)
    console.log(items)
    document.getElementById('item').appendChild(makeItem(item))
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
  let label = document.createElement('label')
  label.htmlFor = 'id'
  label.appendChild(document.createTextNode(item))
  node.appendChild(checkbox)
  node.appendChild(label)
  return node
}
