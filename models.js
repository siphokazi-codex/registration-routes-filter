
const mongoose = require('mongoose');
module.exports = function(mongoURL){
  mongoose.Promise = global.Promise;
  mongoose.connect(mongoURL);

  const RegSchema = mongoose.Schema({registration : String});

  RegSchema.index({registration : 1}, { unique : true});

  const Registration = mongoose.model('Registration', RegSchema);

  return{
    Registration
  };
}
