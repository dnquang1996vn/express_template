const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/report', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
