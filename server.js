const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.listen(process.env.PORT || 3000)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    cards = [
        { id: 1, img: "test.jpg", flagged: false },
        { id: 2, img: "test.jpg", flagged: true },
        { id: 3, img: "test.jpg", flagged: false },
        { id: 4, img: "test.jpg", flagged: false },
        { id: 5, img: "test.jpg", flagged: true },
        { id: 6, img: "test.jpg", flagged: false }
    ]
    res.render('index', {
        cards: cards
    })
})

app.post('/', (req, res) => {
    console.log(req)
    res.send('success')
})