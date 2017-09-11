module.exports = function(models){

  const regList = [];

  const addScreen = function(req, res, next) {

  models.Registration.find({}, function(err, registrations) {
    if (err) {
      return next(err);
    }
console.log(registrations);
    res.render('registration/add', {
      // registration : registrations
      registration : registrations
    });
  });
};

  const add = function(req, res, next){
    //chech if this reg exists on the db using findOne

    var vehicle = {
      registration : req.body.registration
    };
console.log(vehicle.registration);
     if (!vehicle || !vehicle.registration){
        req.flash('error', 'Registration Number should not be blank');
        res.redirect('/registration/add');
     }
     else {
       models.Registration.create(vehicle, function(err, results){
         if (err){
           if (err.code === 11000){
               req.flash('error', 'You have inputed registration number before, please input different registration number');
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
            //  })
            //  .exec(function(err, results){
            //    if (results){
            //      results.save();
            //    }
            //  })

          //  else{
          //     return next(err);
          //  }
         //}

    // }
   //}
  //   if (!registration){
  //     req.flash('error', 'Registration Number should not be blank');
  //   }
   //
  //    else if (!foundRegistration){
  //      regList.push(registration);
  //      req.flash('addRegistration', 'Registration Number added successfully');
  //    }
  //    else{
  //      req.flash('error', 'You have inputed registration number before, please input different registration number')
  //    }
   //
  //    res.render('registration/add', {registration : regList});
  //  }

  return {

    add,
    addScreen
  }
}
