/**
 * Creates database and inserts sample data
 */


const mysql = require('mysql')

// storing connection string in plain text for simplicity of this site, realistically I would store it as an environment variable instead
const connectionString = "mysql://fcbkrb218gau7q4j:tej2xz9xek6r39z5@sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/mywo80oev1fckcqu"
const connection = mysql.createConnection(connectionString)

// initial data to be inserted
const cards = [
    { id: '1', image: 'https://images.unsplash.com/photo-1601296305515-f40892d556db?w=640', flagged: false },
    { id: '2', image: 'https://images.unsplash.com/photo-1601248785880-63c37f7b5aca?w=640', flagged: false },
    { id: '3', image: 'https://images.unsplash.com/photo-1538769404285-8d5c6d639881?w=640', flagged: false },
    { id: '4', image: 'https://images.unsplash.com/photo-1587991545721-91fa289117f8?w=640', flagged: false },
    { id: '5', image: 'https://images.unsplash.com/photo-1601457625608-fa08a158fa5a?w=640', flagged: false },
    { id: '6', image: 'https://images.unsplash.com/photo-1601404392031-e60fccba272c?w=640', flagged: false },
    { id: '7', image: 'https://images.unsplash.com/photo-1601396406057-cea058346830?w=640', flagged: false },
    { id: '8', image: 'https://images.unsplash.com/photo-1595787572714-496673f87f71?w=640', flagged: false },
    { id: '9', image: 'https://images.unsplash.com/photo-1601330962077-a254482bf873?w=640', flagged: false },
    { id: '10', image: 'https://images.unsplash.com/photo-1601363685646-3f580d86b945?w=640', flagged: false },
    { id: '11', image: 'https://images.unsplash.com/photo-1601316729021-acb63ae75854?w=640', flagged: false },
    { id: '12', image: 'https://images.unsplash.com/photo-1583573761949-d7f891d87fbd?w=640', flagged: false },
    { id: '13', image: 'https://images.unsplash.com/photo-1564199323839-2d0d0c2a8633?w=640', flagged: false },
    { id: '14', image: 'https://images.unsplash.com/photo-1600673406905-207f8fa7d062?w=640', flagged: false },
    { id: '15', image: 'https://images.unsplash.com/photo-1601369792098-7cf4df1091d1?w=640', flagged: false },
    { id: '16', image: 'https://images.unsplash.com/photo-1600946278606-c4f41dd3c4ba?w=640', flagged: false }
]

// create cards database
var create = () => {
    const createTable = "CREATE TABLE cards(id int NOT NULL, image varchar(256), flagged boolean, UNIQUE(id));"
    connection.query(createTable, (err, res, fields) => {
        if (err) console.error(`An error has occured when creating database: ${err}`)
        else console.log('Table created successfully')
    })
}


// insert all cards into database
var fill = () => {
    var fillTable = "INSERT INTO cards(id, image, flagged) VALUES"
    for (card of cards) {
        fillTable += ` (${card.id}, '${card.image}', ${card.flagged}),`
    }
    fillTable = fillTable.slice(0, -1) + ';'; // remove last comma and add semicolon
    console.log(`Query: ${fillTable}`)
    connection.query(fillTable, (err, res, fields) => {
        if (err) console.error(`An error has occured when inserting cards: ${err}`)
        else console.log(`Successfully inserted ${cards.length} elements`)
    })
}


// print all cards in database
var read = () => {
    var readTable = "SELECT * FROM cards"
    connection.query(readTable, (err, res, fields) => {
        if (err) console.error(`An error has occured when selecting cards: ${err}`)
        else {
            for (card of res) {
                console.log(card)
            }
        }
    })
}

// drop table
var drop = () => {
    var dropTable = "DROP TABLE cards"
    connection.query(dropTable, (err, res, fields) => {
        if (err) console.error(`An error has occured when dropping database: ${err}`)
        else {
            console.log('Table dropped')
            process.exit(0)
        }
    })
}

// create()
// fill()
// read()
// drop()