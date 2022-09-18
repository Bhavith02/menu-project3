//jshint esversion-6
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

//loading assets
app.use('/css',express.static(path.resolve(__dirname,"public/css")));
app.use('/images',express.static(path.resolve(__dirname,"public/images")));



//parsing request to bodyParser
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
  res.sendFile(__dirname+'/index.html');
})

//starting app.js on specified port number
app.listen(3000,function(){
  console.log("Server started on Port 3000");
});
