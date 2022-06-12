const express = require("express");
const {User} = require('../../_helpers/db');
const app = express();



app.post("/add_user", async (request, response) => {
    const users = new User(request.body);
  
    try {
      await users.save();
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
});




app.get("/users", async (request, response) => {
    const users = await User.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });


  module.exports = app;