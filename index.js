var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


const data = [
	{id:0,name:'jake',age:25,pets:100},
	{id:1,name:'george',age:100,pets:200},
	{id:2,name:'taco',age:1,pets:4}
]


// Get all people localhost:3001/people
app.get('/people',function(req,res){
	res.json(data);
})


// Get a single person: localhost:3001/people/10
app.get('/people/:id',function(req,res){

	let id = req.params.id;
	const single = data.filter(person=>{
		if(person.id==id) return person;
	})
	res.json(single);
})


// Post a new person: localhost:3001/people
app.post('/people',function(req,res){
	let person = {name:req.body.name,id:req.body.id,pets:req.body.pets};
	data.push(person);
	res.json(data)
})

// Delete a person localhost:3001/people/10 
app.delete('/people/:id',function(req,res){
	let id = req.params.id;
	data.forEach((person,index)=>{
		if(person.id==id){
			data.splice(index,1);
		}
	})
	res.json(data);
})

app.listen(3001, function() {
  console.log('Listening on port 3001');
});