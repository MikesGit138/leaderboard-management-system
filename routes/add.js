const express = require('express')
const router = express.Router()

const connection = require('../database/db')

//set add route
router.get('/add', (req,res) =>{
    res.render('add')
})

//post used to  change data
router.post('/save', (req,res) => {
    let data = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        rank: req.body.rank,
        points: req.body.points
    }
    let sql = "INSERT INTO friends SET ?"
    let query = connection.query(sql, data, (err, results) =>{
        if(err) throw err
        res.redirect('/leaderboard')
    })
})

module.exports = router