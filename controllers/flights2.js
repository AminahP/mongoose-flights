const express = require('express');
const router = express.Router()
const Flight = require('./models/Flight');


// Induces -- if routes put in this order it will never fail you!

//index -- view of ALL ITEMS 
router.get('/', (req,res) => {
    //in here goes a FLIght.find({}) to find allof your flights, then a 
    //res.render to show the view associated w/ them (index.jsx view)
})
//new -- form to CREATE a new item 

router.get('/new', (req,res)=>{
    //in here gors res.render to show 'create a new fligth' form(New.jsx view)
})
//delete -- action to DELETE an item
//update -- action to UPDATE an items
//create -- action to CREATE a new item 

router.post('/',(req,res)=>{ 
    //in here goes Flight.create(), passing req.body to it & res.redirect to your index page 
})
//edit -- form to UPDATE an item
//show -- view of ONE ITEM