const express = require("express");
const cors = require('cors');
const mongoose=require('mongoose')
const Router = require("./management/controler/controler")
const app = express();

app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


//write connection localhost4200
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));



//api conne tion
app.use('/api/client', require('./management/controler/client'));




app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});