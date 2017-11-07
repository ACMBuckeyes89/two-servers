var http = require("http");

//Define PORTs 
const PORTONE = 7000;
const PORTTWO = 7500;   

//Creating a function that handles requests and responses
function handleRequestOne (request, response) {

//Sending the following string to the client when the user visits the PORT
	response.end(`I gotta say, you looking fine today!`); 
}  

function handleRequestTwo (request, response) {

//Sending the following string to the client when the user visits the PORT
	response.end(`Your stupid.`); 
} 
//Using the node package to the create the servers
//Passing the handleRequest function the empower the server with functionality
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);
//Starting the server to begin listening to client requests
serverOne.listen(PORTONE, function() {
	//Log (server-side) when the server has started 
	console.log(`Server listening on: http://localhost:${PORTONE}`);
});

serverTwo.listen(PORTTWO, function() {
	console.log(`Server listening on: http://localhost:${PORTTWO}`);
});
