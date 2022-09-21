const express = require('express');
const router = express.Router()
const Flight = require('./models/Flight.js');


// Induces -- if routes put in this order it will never fail you!

//index -- view of ALL ITEMS 
router.get('/', (req, res) => { // Route is technically /flights because in server.js it is put as the base route for this controller
    // in here goes a Flight.find({}) to find all of your flights and then a res.render to show the view associated with them! (Index.jsx view)
    Flight.find({}, (error, allFlights) => {
      res.render('flights/Index', {
        flights: allFlights
      })
    })
  })
//new -- form to CREATE a new item 

router.get('/new', (req,res)=>{
    //in here gors res.render to show 'create a new fligth' form(New.jsx view)
    // const newFlight = new Flight();
    // // Obtain the default date
	// const dt = newFlight.departs;
	// // Format the date for the value attribute of the input
	// const departsDate = dt.toISOString().slice(0, 16);
	res.render('flights/New');

})
//delete -- action to DELETE an item
//update -- action to UPDATE an items
//create -- action to CREATE a new item 

router.post('/',(req,res)=>{ 
    //in here goes Flight.create(), passing req.body to it & res.redirect to your index page
    Flight.create(req.body, (error, createdFlight) =>{
        res.redirect('/flights')
    });
});
//edit -- form to UPDATE an item


//show -- view of ONE ITEM

module.exports = router;