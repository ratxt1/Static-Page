var express = require('express');
var app = express();
var port = 3000
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var data = []

var data = []

app.set('view engine', 'ejs');

app.use(express.static('./public'))

app.get('/test', function(req, res){
  res.render('page', {list: data});
});

app.post('/test', urlencodedParser, function(req, res){
  let formItem = req.body;
  let currentTime = new Date().getTime() 
  let listItem = {name: formItem.item, time: currentTime, message: ""};
  data.push(listItem);
  res.render('page', {list: data});
  res.json(data);
  console.log(data)
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))






