const express = require('express')
const router = express.Router()
const session = require('express-session')
const bcrypt = require('bcrypt')


const connection = require('../database/db')

router.get('/login', (req, res) =>{
   res.render('login')
})

router.post('/login',(req,res)=>{
    
    let username = req.body.username;
    let password = req.body.password;
    
    connection.query("select * from user where username = ?",[username],(error, results,fields)=>{
      if (error) throw error
        if(results.length > 0 && bcrypt.compare(password,results[0].password)){
           
          req.session.loggedin = true;
            res.redirect('/')
            req.session.username = username;
        }
  
        else{
        //   req.flash('error', 'incorrect credentials')
            // res.redirect('/login')  
          res.send('incorrect login info')
        }
        res.end()
    })
    
  })


  // Logout user
router.get('/logout', function (req, res) {
  req.session.destroy();
  // req.flash('success', 'Enter Your Login Credentials')
  res.redirect('/login');
});

module.exports = router