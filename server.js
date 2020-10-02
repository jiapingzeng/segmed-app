const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.listen(process.env.PORT | 3000)

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})