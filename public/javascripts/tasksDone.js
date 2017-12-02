const show = document.getElementById('show')
const task = document.createElement('div')
task.id = 'done-task'
const parent = show.parentElement
parent.appendChild(task)
show.addEventListener('click', function (e) {
  if (e.target.clicked) {
    e.target.clicked = false
    e.target.parentElement.removeChild(task)
  } else if (!e.target.clicked || e.target.clicked === undefined) {
    // const parent = document.getElementById('done-task')
    const li = document.createElement('li')
    li.id = 'done'
    li.class = 'done'
    const label = document.createElement('label')
    label.htmlFor = 'done'
    for (let todo of done) {
      li.appendChild(label.appendChild(document.createTextNode(todo)))
      task.appendChild(li)
    }
    e.target.clicked = true
  }
})
