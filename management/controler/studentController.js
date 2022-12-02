const express = require("express");
const router = express.Router();
const { Student } = require('../../_helpers/db');




router.post("/add_student", (request, response) => {
    const studentnew = new Student({
        name: request.body.name,
        age: request.body.age,
        email: request.body.email,
        phone: request.body.phone,
        addr: request.body.addr,
        city: request.body.city,
        state: request.body.state,
        country: request.body.country,
        pin: request.body.pin
    })
    studentnew.save()
    .then(r => {
        response.json({ type: 'success', msg: 'user created' ,data:studentnew})
    })
    .catch(err => { console.log(err) })
});













module.exports = router;