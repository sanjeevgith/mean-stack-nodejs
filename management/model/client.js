const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Client = new Schema({
  name: {type: String},
  address: {type:String},

});
Client.set('toJSON',{virtuals:true});
module.exports = mongoose.model('Client', Client);

