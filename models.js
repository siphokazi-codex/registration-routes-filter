
const mongoose = require('mongoose');
module.exports = function(mongoURL){
  mongoose.Promise = global.Promise;

  mongoose.connection.on("error", function(err){
    console.log(err);
  })

  mongoose.connect(mongoURL);

  const RegSchema = mongoose.Schema({registration : String});

  RegSchema.index({registration : 1}, { unique : true});

  const Registration = mongoose.model('registration', RegSchema);

  return{
    Registration
  };
}
