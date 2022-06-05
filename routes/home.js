const express = require('express')
const router = express.Router();


router.get('/', (req, res) =>{
if(req.session.loggedin === true){
   res.render('home')
} else {
   res.redirect('/login')
}
})

module.exports = router