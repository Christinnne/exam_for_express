const express = require('express')
const app = express()
const exphds = require('express-handlebars')
const port = 3000

app.engine('handlebars', exphds.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  const index = '首頁'
  res.render('index', { index: index })
})

app.get('/:info', (req, res) => {
  const index = req.params.info
  res.render('index', { index: index })
})

app.listen(port, () => {
  console.log(`server running`)
})