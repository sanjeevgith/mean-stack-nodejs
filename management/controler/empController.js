const express = require("express");
const router = express.Router();
const { Emp } = require('../../_helpers/db');




router.post("/add_emp", (request, response) => {
    const empnew = new Emp({
        name: request.body.name,
    })
    empnew.address.addr = request.body.addr
    empnew.address.city = request.body.city
    empnew.save()
        .then(r => {
            response.json({ type: 'success', msg: 'user created'})
        })
        .catch(err => { console.log(err) })
});








router.get("/get_emp", (request, response) => {
    Emp.find()
        .then(r => {
            response.json({ response: r })
        })
        .catch(err => { console.log(err) })
});





router.delete("/delete_emp/:_id", (request, response) => {
    Emp.findByIdAndDelete(request.params._id)
        .then(r => {
            response.json({ type: 'success', response: "employee deleted" })
        })
        .catch(err => { console.log(err) })
});





router.patch("/update_emp/:_id", (request, response) => {
    Emp.findByIdAndUpdate(request.params._id)
        .then(r => {
            // console.log(r)
            r.name = request.body.name,
                r.address.addr = request.body.addr,
                r.address.city = request.body.city,
                r.save()
            response.json({ type: 'success', response: "employee updated" })
        })
        .catch(err => { console.log(err) })
});














module.exports = router;