var express = require('express');
var router = express.Router();
var Musicbox = require('../models/musicbox.model.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));



router.get('/albums', function(req, res){


});
router.get('/albums/id:', function(req, res){});
router.post('/albums', function(req, res){


  var album = new Album(req.body);
  album.save(function(err){
    if(err){

  res.status(500).json({

    err: err
  });
}
res.status(201).json({
  msg: 'succefully created Music-Box'
});
  });

});

router.put('/albums/id:', function(req, res){});
router.delete('/albums/id:', function(req, res){});

module.exports = router;
