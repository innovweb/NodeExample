// Install Express and ejs in order to run
var express = require('express');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	var req.query = req;

	if(req.id){
		// send article
	}

	// Filter: magazine -> category -> dateRange
	switch (req.magazine){
		//... do work ....
	}
	switch (req.category){
		//... do work ....
		// SEND HTTP REQUEST
	}
	switch (req.dateRange){
		//... do work ....

	}


	console.log(req.query.user);
	res.render("index", {user:req.query.user});
});

app.listen(8080);
console.log("We're live!");