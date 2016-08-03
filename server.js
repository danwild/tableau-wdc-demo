var express = require("express");
var app = express();
var port = process.env.PORT || 4444;

// serve nested static files
app.use(express.static("connectors"));
app.use(express.static("lib"));

app.listen(port, function(err){
	console.log("running server on port "+ port);
});

