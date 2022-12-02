const mongoose = require("mongoose");
const Schema = mongoose.Schema;






const Emp = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        addr: {
            type: String
        },
        city: {
            type: String
        }
    }
});





Emp.set('toJSON', { virtuals: true });
module.exports = mongoose.model("Emp", Emp);



