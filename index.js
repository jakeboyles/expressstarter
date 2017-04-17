const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const data = [];

// Get all of people
app.get('/people',function(req,res){
})

// Get a single person
app.get('/people/:id',function(req,res){
})

// Post a new person
app.post('/people',function(req,res){
})

// Delete a person
app.delete('/people/:id',function(req,res){
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});