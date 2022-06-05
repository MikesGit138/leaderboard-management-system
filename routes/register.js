const express = require('express')
const router = express.Router();
const session = require('express-session')
const bcrypt = require('bcrypt')

const connection = require('../database/db')


//get register route
router.get('/register', (req,res) =>{
    res.render('register.ejs')
})

//post register route for changes
router.post('/register', async (req,res)=>{
                  
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
                            
        let data = {
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email
        }
        let sql = "INSERT INTO user SET ?"
        let query = connection.query(sql, data, (err, results) =>{
                                if(err) throw err
                                res.redirect('/login')
    
            })
    
})
module.exports = router