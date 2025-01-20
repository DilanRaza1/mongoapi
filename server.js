const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000



app.get("/", (req, res) => {
  res.send("welcome to my mongoapi");
});

app.post("/blogspot", (req, res) => {
  res.send("this is a postrequest");
});

mongoose.
connect("mongodb+srv://dilan1raza:12345678910@dilanapi.jqdso.mongodb.net/Products_API?retryWrites=true&w=majority&appName=DilanAPI")
.then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log("connected to mongo");
  });
});