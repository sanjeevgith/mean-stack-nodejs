const mongoose = require("mongoose");







mongoose.connect('mongodb://localhost:27017/firstnodejsproject',
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
   
    
  }
);


module.exports = {
    User: require('../management/model/model'),
    Client: require('../management/model/client')
};
