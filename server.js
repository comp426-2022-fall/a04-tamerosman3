import minimist from "minimist"
import express from "express"
import roll from "./lib/roll.js" 

let port = 5000;

const app = express();
app.use(express.urlencoded({extended: true}));

const args = minimist(process.argv.slice(2));

if(args.port != null) 
{
	port = args.port;
}

app.get('/app/', (req, res) => {
	res.send('200 OK');
});

// Endpoint /app/roll/ that returns JSON for a default roll of two six-sided dice one time.
app.get('/app/roll/', (req, res) => {
	res.send(roll(6,2,1));
});

// Make endpoint accept URLEncoded or JSON
app.post('/app/roll/', (req, res) => {
	let sides = parseInt(req.body.sides);
	let dice = parseInt(req.body.dice);
	let rolls = parseInt(req.body.rolls);

	res.send(roll(sides, dice, rolls));
});

//Endpoint /app/roll/:sides/ that returns JSON for a default number of rolls and dice with whatever number of sides is specified in the parameter.
app.get('/app/roll/:sides/', (req, res) => {
	let sides = parseInt(req.params.sides);

	res.send(roll(sides, 2, 1));
});

// Endpoint /app/roll/:sides/:dice/ that returns JSON for a default number of rolls with whatever number of sides and dice specified in the parameters
app.get('/app/roll/:sides/:dice/', (req, res) => {
	let sides = parseInt(req.params.sides);
	let dice = parseInt(req.params.dice);

	res.send(roll(sides, dice, 1));
});

// Endpoint /app/roll/:sides/:dice/:rolls/ that returns JSON for the specified number of rolls with whatever number of sides and dice specified in the parameters.
app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
	let sides = parseInt(req.params.sides);
	let dice = parseInt(req.params.dice);
	let rolls = parseInt(req.params.rolls);
	
	res.send(roll(sides, dice, rolls));
});

app.use(function(req, res) {
	res.send("404 NOT FOUND");
});

app.listen(port);

