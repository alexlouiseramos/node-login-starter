const router = require('express').Router();
const userController = require('../controllers/userController');
  const { registerValidation, loginValidation } = require('../validators.js');
  const { isPublic, isPrivate } = require('../middlewares/checkAuth');

  router.get('/login', isPublic, (req, res) => {
    res.render('login', {
      pageTitle: 'Login',
    });
  });
  
  router.get('/register', isPublic, (req, res) => {
    res.render('register', {
      pageTitle: 'Registration',
    });
  });
  
  router.post('/register', isPublic, registerValidation, userController.registerUser);
  router.post('/login', isPublic, loginValidation, userController.loginUser);
  router.get('/logout', isPrivate, userController.logoutUser);
/*
// GET login to display login page
router.get('/login',(req, res) => {
  res.render('login', {
    pageTitle: 'Login',
  });
});

// GET register to display registration page
router.get('/register', (req, res) => {
  res.render('register', {
    pageTitle: 'Registration',
  });
});

// POST methods for form submissions
  router.post('/register', registerValidation, userController.registerUser);
  router.post('/login', loginValidation, userController.loginUser);
//router.post('/register', userController.registerUser);
//router.post('/login', userController.loginUser);

// logout
router.get('/logout', userController.logoutUser); */



module.exports = router;
