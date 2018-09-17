var express = require('express'),
    app = express(), 
    port = 3000
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));



app.get('/',function(req, res) {
    res.sendFile("index.html");
})

app.use('/api/todos', todoRoutes);

app.set('port', process.env.PORT || 3000)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })


