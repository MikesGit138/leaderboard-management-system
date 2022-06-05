const port = 5050
const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const bcrypt = require('bcrypt')
const mysql = require('mysql')
const path = require('path')
const db = require('./database/db')


const server = express()

server.set("view engine", "ejs")
server.set('views', path.join(__dirname, 'views'))
server.use(express.static('public'))

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }))
server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))


//route variables 
const homeRoute = require('./routes/home')
const leaderboardRoute = require('./routes/leaderboard')
const loginRoute = require('./routes/login')
const regRoute = require('./routes/register')

//routes
server.use('/', homeRoute)
server.use('/', leaderboardRoute)
server.use('/', loginRoute)
server.use('/', regRoute)


server.listen(port, console.log(`listening on http://localhost:${port}`))

