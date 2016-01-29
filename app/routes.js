var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});


// Example route: Passing data into a page
router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});

router.get('/:version/applications', function (req, res) {
  var version =  req.params.version;
  res.render(version + '/applications');
});

router.get('/:version/applications/:application', function (req, res) {
  var version =  req.params.version;
  res.render(version + '/application', { 'app' : req.params.application });
});

router.get('/:version/applications/:application/draft', function (req, res) {
  var version =  req.params.version;
  res.render(version + '/draft_register', { 'app' : req.params.application });
});

router.get('/:version/applications/:application/confirm', function (req, res) {
  var version =  req.params.version;
  res.render(version + '/confirm', { 'app' : req.params.application });
});


module.exports = router;
