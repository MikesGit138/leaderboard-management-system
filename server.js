const port = 5050
const bodyParser = require('body-parser')
const express = require('express')
const mysql = require('mysql')
const db = require('./database/db')
const server = express()

//route variables 
const homeRoute = require('./routes/home')

//routes
server.use('/', homeRoute)



server.listen(port, console.log(`listening on http://localhost:${port}`))

