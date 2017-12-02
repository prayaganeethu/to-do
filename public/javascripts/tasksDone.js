const show = document.getElementById('show')
const task = document.createElement('div')
task.id = 'done-task'
const parent = show.parentElement
parent.appendChild(task)
show.addEventListener('click', function () {
  const parent = document.getElementById('done-task')
  const li = document.createElement('li')
  for (let task of done) {
    li.appendChild(document.createTextNode(task))
    parent.appendChild(li)
  }
})
