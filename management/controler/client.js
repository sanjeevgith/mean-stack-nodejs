const express = require("express");
const {Client} =require('../../_helpers/db')
const router = express.Router();

const app = express();





router.post('/addclient', (req, res) => {

    const Clientadd = new Client({
        name: req.body.name,
        address: req.body.address,
        })
        Clientadd.save()
        .then(r => {
            res.json({ type: 'success', msg: 'agent created' })
            
        })
        .catch(err => { 
            console.log(err) })
})







module.exports = router;