const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mysql = require('mysql')

const app = express()
app.listen(process.env.PORT || 3000)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// storing connection string in plain text for simplicity of this site, realistically I would store it as an environment variable instead
const connectionString = "mysql://fcbkrb218gau7q4j:tej2xz9xek6r39z5@sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/mywo80oev1fckcqu"
const connection = mysql.createConnection(connectionString)

app.get('/', (req, res) => {
    let cards = []
    console.log('Retrieving cards...')
    connection.query('SELECT * FROM cards;', (err, data, fields) => {
        if (err) {
            console.error(`Unable to access database: ${err}`)
            res.sendStatus(500)
        } else {
            console.log('Successfully loaded cards, rendering page')
            for (card of data) cards.push(card)
            res.render('index', {
                cards: cards
            })
        }
    })
})

app.post('/', (req, res) => {
    cardid = req.body.id
    console.log(`Updating card with id ${cardid}...`)
    connection.query(`UPDATE cards SET flagged = NOT flagged WHERE id = ${cardid}`, (err, data, fields) => {
        if (err) {
            console.error(`An error has occurred while setting flag: ${err}`)
            res.sendStatus(500)
        } else {
            console.log('Successfully updated card')
            res.sendStatus(200)
        }
    })
})