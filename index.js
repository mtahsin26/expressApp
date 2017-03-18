var express = require('express');

var app = express();

app.get("/", function(req, res){
    res.send("Testing Express - Hello World");
    
});

//Starts server
app.listen("3000", function(){

    console.log("Running server");
});

