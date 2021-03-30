const express = require('express');
const router = express.Router();

const controller = require('../controllers/news');
const middlewares = require('../middlewares/news');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('news', );
});

router.get('/create', function(req, res, next) {
  res.render('newPost', {errorMessage: req.query.errorMessage, successMessage: req.query.successMessage});
});

router.get('/:id', controller.noticyView);

router.post( "/", middlewares.validateBody ,controller.newPost );

module.exports = router;
