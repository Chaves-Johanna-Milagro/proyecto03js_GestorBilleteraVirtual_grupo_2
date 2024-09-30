const express = require("express");

const app = express();

//endpoint
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/public/view/index.html");
});

//routing
app.use('/public', express.static(__dirname+"/public"));
app.use('/src', express.static(__dirname+"/src"));
app.use('/css', express.static(__dirname+"/css"));
app.use('/view', express.static(__dirname+"/view"));
app.use('/node_modules', express.static(__dirname+"/node_modules"));


//listening
app.listen(5000, ()=>{
  console.log("Servidor corriendo");    
})
