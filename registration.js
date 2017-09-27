module.exports = function(models){

  const regList = [];

  const addScreen = function(req, res, next) {

  models.Registration.find({}, function(err, registrations) {
    if (err) {
      return next(err);
    }

    res.render('registration/add', {
      // registration : registrations
      registration : registrations
    });
  });
};

  const add = function(req, res, next){
    //chech if this reg exists on the db using findOne

    var vehicle = {
      registration : (req.body.registration).substr(0,2).toUpperCase() + ' ' + (req.body.registration).substr(2).toLowerCase()
    }

     if (!vehicle || !vehicle.registration || (!req.body.registration)){
        req.flash('error', 'Registration Number cannot not be blank, please input registration number');
        res.redirect('/registration/add');
     }
     else {
       models.Registration.create(vehicle, function(err, results){
         if (err){
           if (err.code === 11000){
              //console.log(vehicle.registration);
               req.flash('error', 'You have inputed registration number before, please input different registration number');
               res.redirect('/registration/add');
ls
           }
           else {
              return next(err);
           }
         }
         else {
            req.flash('addRegistration', 'Registration Number added successfully');
            res.redirect('/registration/add');
         }
       });
     }
   }

   const filter = function(req, res) {

     var town = req.body.towns;

     if (town === 'All'){
       res.redirect('registration/add');
     }
     else {
       var regEx = ".*/" + town

       models.Registration.find({registration:{'$regex': ".*" + town,$options: 'i'}}, function(err, results){
         if (err) {
           return next(err);
         }

         res.render('registration/add', {registration : results})
       })
     }
   }

  return {

    add,
    addScreen,
    filter
  }
}
