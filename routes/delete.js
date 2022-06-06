const express = require('express')
const router = express.Router()

const connection = require('../database/db')

//delete route
router.get('/delete/:userId',(req,res)=> {
    const userId = req.params.userId
    let sql = `DELETE FROM friends WHERE id = ${userId}`
    let query = connection.query(sql, (err, result) =>{
        if (err) throw err
        //redirect to home after deletion
       res.redirect('/leaderboard')
    })
})


module.exports = router