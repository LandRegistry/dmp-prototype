var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/:version/applications', function (req, res) {
  var version =  req.params.version;
  res.render(version + '/applications', { 'ver' : req.params.version });
});

router.get('/:version/applications/:application', function (req, res) {
  var version =  req.params.version;
  res.render(version + '/application', { 'app' : req.params.application, 'ver' : req.params.version });
});

router.get('/:version/applications/:application/draft', function (req, res) {
  var version =  req.params.version;
  res.render(version + '/draft_register', { 'app' : req.params.application, 'ver' : req.params.version });
});

router.get('/:version/applications/:application/confirm', function (req, res) {
  var version =  req.params.version;
  res.render(version + '/confirm', { 'app' : req.params.application, 'ver' : req.params.version });
});

module.exports = router;
