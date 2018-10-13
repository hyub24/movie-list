var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var mysql = require('mysql');

var app = express();

app.use(morgan('dev')); //just for testing
app.use(parser.json()); //gives request body parsed object?

// app.options("/*", function(req, res, next){
//   //res.header('Access-Control-Allow-Origin', '*');
//   //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   //res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//   //res.send(200);
// });

app.get('/movies', (req, res) => {
	//req.header('Access-Control-Allow-Origin', '*');
	var select = 'select title from movies';
	dbConnection.query(select, (err, results, fields) => {
		if(err) {
			console.log(err);
		}
		console.log(typeof results)
		res.send(results);
	})
	//res.send(JSON.stringify(results));
})

app.post('/movies', (req, res) => {
	var insert = 'insert into movies (title) values (' + JSON.stringify(req.body) + ')';
	dbConnection.query(insert, (err, results, fields) => {
		if(err) {
			console.log('nope')
		}
		console.log(JSON.stringify(req.body));
		console.log(typeof req.body);
		res.status(201).send();
	})
	
})
app.listen(3000, () => {
	console.log('server is listening at port 3000');
});

//connecting to the mysql database

var dbConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'movielist'
});

//dbConnection.connect();  //not explicitly necessary because the query requests will connect for you

// dbConnection.query('SELECT * from movies', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });