const express = require('express')
const router = express.Router()

const connection = require('../database/db')

//edit page
router.get('/edit/:id',(req,res)=> {
    const id = req.params.id
    let sql = `SELECT * FROM leaderboard.friends WHERE id = ${id}`
    let query = connection.query(sql, (err, result) =>{
        if (err) throw err
        res.render('edit', {
            friends : result[0]
        })
    })
})

//update route
router.post('/update',(req, res) => {
    const id = req.body.id
    const fname = req.body.firstName
    const lname = req.body.lastName
    const rank = req.body.rank
    const points = req.body.points
    let sql = `UPDATE leaderboard.friends SET first_name= '${fname}', last_name= '${lname}' WHERE id = ${id}`
    let query = connection.query(sql,(err, results) => {
      if(err) throw err;
      res.redirect('/leaderboard');
    });
});
module.exports = router