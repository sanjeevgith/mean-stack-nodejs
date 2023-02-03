const mongoose = require("mongoose");



//mongodb+srv://sanjeev:<Tf9o9y6qowCCNGdd>@cluster0.0dpacjq.mongodb.net/test



// mongoose.connect('mongodb://localhost:27017/firstnodejsproject',
//nodejs 18 update 
// mongoose.connect('mongodb://127.0.0.1:27017/firstnodejsproject',
mongoose.connect('mongodb+srv://sanjeev:Tf9o9y6qowCCNGdd@cluster0.0dpacjq.mongodb.net/test',
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
