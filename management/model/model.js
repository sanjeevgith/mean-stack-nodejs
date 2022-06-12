const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});
User.set('toJSON',{virtuals:true});
module.exports = mongoose.model("User", User);

