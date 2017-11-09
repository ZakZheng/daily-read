const fs = require('fs')
const base = require('./dom/base')
const item = require('./dom/item').item
const today = `${new Date().getMonth()}月${new Date().getDate()}日`

fs.readFile('./created.json', 'utf8', (err, data) => {
  if (err) throw err
  data = JSON.parse(data)
  if (!fs.existsSync(today)) {
    fs.mkdirSync(today)
  }
  fs.writeFile(`./${today}/task.html`, base.html({
    today,
    item: item(data)
  }), (err) => {
    if (err) throw err
  })
})