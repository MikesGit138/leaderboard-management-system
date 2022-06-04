const port = 5050
const bodyParser = require('body-parser')
const express = require('express')
const mysql = require('mysql')
const db = require('./database/db')
const app = express()

//route variables 
const homeRoute = require('./routes/home')

//routes
app.use('/', homeRoute)

app.listen(`${port}`)

