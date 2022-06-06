const port = 5050

const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const flash = require('express-flash')
const bcrypt = require('bcrypt')
const path = require('path')
const cookieParser = require('cookie-parser')

const mysql = require('mysql')
const db = require('./database/db')

const server = express()

server.set("view engine", "ejs")
server.set('views', path.join(__dirname, 'views'))
server.use(express.static('public'))

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }))

server.use(flash())

server.use(cookieParser())
server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 120000 }
}))

//route variables 
const homeRoute = require('./routes/home')
const leaderboardRoute = require('./routes/leaderboard')
const loginRoute = require('./routes/login')
const regRoute = require('./routes/register')
const editRoute = require('./routes/edit')
const addRoute = require('./routes/add')
const delRoute = require('./routes/delete')

//routes
server.use('/', homeRoute)
server.use('/', leaderboardRoute)
server.use('/', loginRoute)
server.use('/', regRoute)
server.use('/', editRoute)
server.use('/', addRoute)
server.use('/', delRoute)

server.listen(port, console.log(`listening on http://localhost:${port}`))

