const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('PUT YOUR MLAB STUFF HERE');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


// Get all of people
app.get('/users',function(req,res){
	User.find().exec((err,response)=>{
	})
})

app.post('/users',function(req,res){
	let user = new User();
})

app.get('/users/:id',function(req,res){
})

app.delete('/users/:id',function(req,res){
})


// Start the server
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});