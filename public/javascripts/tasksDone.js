const show = document.getElementById('show')
show.clicked = true
const task = document.createElement('div')
task.id = 'done-task'
const parent = show.parentElement
parent.appendChild(task)

show.addEventListener('click', function (e) {
  console.log(e.target.clicked)
  if (e.target.clicked) {
    if (done.length !== 0) {
      const ul = document.createElement('ul')
      ul.id = "tasks-done"
      ul.class = "tasks-done"
      const label = document.createElement('label')
      label.htmlFor = 'done'
      for (let todo of done) {
        const li = document.createElement('li')
        li.id = 'done'
        li.class = 'done'
        li.appendChild(label.appendChild(document.createTextNode(todo)))
        ul.appendChild(li)
        e.target.parentElement.appendChild(ul)
      }
      e.target.clicked = false
    } else {
      console.log('list empty')
      e.target.clicked = true
    }
  } else if (!e.target.clicked || e.target.clicked === undefined) {
    if (e.target.parentElement.childNodes.length !== 0) {
      for (let t of e.target.parentElement.childNodes) {
        console.log(t.id)
        if (t.id === 'tasks-done') e.target.parentElement.removeChild(t)
      }
      e.target.clicked = true
    }
  }
})
