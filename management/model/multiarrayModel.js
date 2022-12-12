const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MultiData = new Schema({
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
    },
    bank: {
        acnumber: {
            type: Number
        },
        acname: {
            type: String
        }
    }
});




MultiData.set('toJSON', { virtuals: true });
module.exports = mongoose.model("MultiData", MultiData);



