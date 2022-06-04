const port = 5050
const bodyParser = require('body-parser')
const express = require('express')
const mysql = require('mysql')
const path = require('path')
const db = require('./database/db')
const server = express()

server.set("view engine", "ejs")
server.set('views', path.join(__dirname, 'views'))
server.use(express.static('public'))


//route variables 
const homeRoute = require('./routes/home')
const leaderboardRoute = require('./routes/leaderboard')

//routes
server.use('/', homeRoute)
server.use('/', leaderboardRoute)



server.listen(port, console.log(`listening on http://localhost:${port}`))

