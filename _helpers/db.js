const mongoose = require("mongoose");







// mongoose.connect('mongodb://localhost:27017/firstnodejsproject',
//nodejs 18 update 
mongoose.connect('mongodb://127.0.0.1:27017/firstnodejsproject',
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
   
    
  }
);


module.exports = {
    User: require('../management/model/model'),
    Student: require('../management/model/studentModel'),
    Emp: require('../management/model/empModel'),
    MultiData: require('../management/model/multiarrayModel'),
   
};
