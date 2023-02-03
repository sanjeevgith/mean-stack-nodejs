const express = require("express");
const app = express();
const cors = require('cors');
const mongoose=require('mongoose')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.json())

const bodyParser = require('body-parser');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//Tf9o9y6qowCCNGdd

//mongodb+srv://sanjeev:<Tf9o9y6qowCCNGdd>@cluster0.0dpacjq.mongodb.net/test

//connection localhost4200
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));

//api conne tion
app.use('/api/student', require('./management/controler/studentController'));
app.use('/api/controler', require('./management/controler/controler'));
app.use('/api/emp', require('./management/controler/empController'));
app.use('/api/MultiData', require('./management/controler/multiarrayController'));


app.listen(3000, () => {
  console.log("Server is running at port 3000");
});



// URL postman
// http://localhost:3000/api/emp/update_emp/ apiname