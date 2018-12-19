let express = require('express');
let router = express.Router();
let userProfileModal = require('../modal/userProfile');
let loginModal = require('../modal/userProfile');
let {userProfile, login} = require('../validation/Auth');



//test get request
router.get('/tt', function (req, res) {
    res.json({test: 'test'});
});




/* Register new user, post method */
router.post('/create', function(req, res, next) {
    console.log('called!!');
  const errors = userProfile(req.body);
  if(Object.keys(errors).length) {
    const response = {};
    response.success = false;
    response.data = errors;
    res.json(response);
  }

  else {
      const {userName, userEmail, password, confirmPassword} = req.body;
      const newUser = new userProfileModal({
          userName: req.body.userName,
          userEmail: req.body.userEmail,
          password: req.body.password,
          confirmPassword: req.body.confirmPassword
      });

      // check if user is already register
      userProfileModal.findOne({userEmail : req.body.userEmail})
          .then(user => {
              if(user) {
                  const response  = {
                      success: false,
                      errorMessage: 'user already exist'
                  };
                  res.json(response);
              }
              else {
                  newUser.save()
                      .then(user => {
                          const response  = {
                              success: true,
                              data : {
                                  user
                              }
                          };
                          res.json(response);
                      })
                      .catch(error => {
                          const response = {
                              success: false,
                              data: {
                                  error
                              }
                          };
                          res.json(response);
                      })
              }
          })
          .catch(error => {
              console.log(error);
                res.json(error)
          });
  }
});


router.post('/login', function (req,res) {
   const errors =  login(req.body);
   if(!errors) {
       const res = {
           success: false,
           data: errors
       };
       res.json({res});
   }
   else {
       const {userEmail, password} = req.body;
       loginModal.findOne({userEmail})
           .then(user => {
               if(!user) {
                   res.json({
                       success: false,
                       errorMessage: 'User Not found',
                       data: {}
                   })
               }
               else {
                   if(user.password !== password) {
                       res.json({
                           success: false,
                           errorMessage: 'Password is not valid',
                           data: {}
                       })
                   }
                   else {
                       res.json({
                           success: true,
                           errorMessage: '',
                           data: user
                       })
                   }
               }
           })
           .catch(error => console.log(error));
   }
});



module.exports = router;
