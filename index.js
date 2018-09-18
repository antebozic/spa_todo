var express = require('express'),
    app = express(), 
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));



app.get('/',function(req, res) {
    res.sendFile("index.html");
})

app.use('/api/todos', todoRoutes);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


