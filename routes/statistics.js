const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const connection = require('../database/db')


router.get('/stats', (req, res) => {
    let sql = `select avg(points) as average from friends; 
                select max(points) as maximum from friends;
                    select min(points) as minimum from friends;
                    select first_name, last_name from friends group by first_name order by min(points);
                    select first_name, last_name from friends group by first_name order by min(points) desc`
    let query = connection.query(sql, (err, result) => {
        console.log(result[4][0].last_name)
        res.render('stats', {
            avg: result[0][0].average,
            max: result[1][0].maximum,
            min: result[2][0].minimum,
            worstFF: result[3][0].first_name,
            worstFL: result[3][0].last_name,
            bestFF: result[4][0].first_name,
            bestFL:  result[4][0].last_name 
        })
    })
})

// function max(){
// router.get('/stats', (req, res) => {
//     let sql = 'select max(points) as maximum from friends'
//         let maxquery = connection.query(sql, (err, max) => {
//             console.log(max)
//             res.render('stats', {
//                 max: max[0].maximum
//             })
//         })
//     })
// }
module.exports = router