const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  return res.render(`home.ejs`)
})

const PORT = process.argv[2] || 8080


app
  .listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
  .on('error', console.error)