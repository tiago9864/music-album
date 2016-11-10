var express = require('express');
var router = express.Router();
var Musicbox = require('../models/musicbox.model.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));



router.get('/boxes', function(req, res){});
router.get('/boxes/id:', function(req, res){});
router.post('/boxes', function(req, res){


  var musicbox = new Musicbox(req.body);
  musicbox.save(function(err){
    if(err){

  res.status(500).json({

    err: err
  });
}
res.status(201).json({
  msg: 'succefully created todo'
});
  });
 
});

router.put('/boxes/id:', function(req, res){});
router.delete('/boxes/id:', function(req, res){});

module.exports = router;
