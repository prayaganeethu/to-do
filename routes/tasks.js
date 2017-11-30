/* GET home page. */
const path = require('path')

exports.list = function (req, res) {
  res.sendFile(path.join(__dirname, '../views/tasks.html'))
}
