var express = require('express'),
    app = express(), 
    port = 3000;

app.get('/',function(req, res) {
    res.send("Hi from express");
})

app.listen(port, function() {
    console.log("app is running on port " + port);
})



