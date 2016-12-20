var express = require('express');
var router = express.Router();

router.get('/testes', function(req, res, next) {
  res.render('testes', { title: 'Ora ora.. Testando' });
});

module.exports = router;
