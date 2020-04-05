// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
const fetch = require('node-fetch');
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = process.env.PORT || 8000;
// Spin up the server
app.listen(port, () => console.log(`running on localhost: ${port}`));

// Respond with JS object when a GET request is made to the homepage
//Create endpoints / route handlers
app.get('/', (request, response) => {
	response.status(200).send(projectData);
});

// POST method route
app.post('/', addInfo);
function addInfo(req, res) {
	projectData['date'] = req.body.date;
	projectData['temp'] = req.body.temp;
	projectData['content'] = req.body.content;
	res.send(projectData);
	res.status(201).send()
}


