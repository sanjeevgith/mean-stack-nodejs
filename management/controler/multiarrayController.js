const express = require("express");
const router = express.Router();
const { MultiData } = require('../../_helpers/db');




router.post("/add_multiarray", (request, response) => {
    const empnew = new MultiData({
        name: request.body.name,
        gender: request.body.gender,
        age: request.body.age,
        number: request.body.number,
    })
    empnew.address.addr = request.body.addr
    empnew.address.city = request.body.city
    empnew.bank.acnumber = request.body.acnumber
    empnew.bank.acname = request.body.acname
    empnew.save()
        .then(r => {
            response.json({ type: 'success', msg: 'user created' })
        })
        .catch(err => { console.log(err) })
});


router.get("/get_multiarray", (request, response) => {
    MultiData.find()
        .then(r => {
            response.json({  r })
        })
        .catch(err => { console.log(err) })
});

















module.exports = router;