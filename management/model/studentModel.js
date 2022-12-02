const mongoose = require("mongoose");
const Schema = mongoose.Schema;






const Student = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  addr: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  country: {
    type: String
  },
  pin: {
    type: String
  }
});





Student.set('toJSON', { virtuals: true });
module.exports = mongoose.model("Student", Student);



