var express = require('express');
var router = express.Router();
var Album = require('../models/musicbox.model.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));



router.get('/albums', function(req, res){
  Album.find({}, function(err, foundAlbums){
   if(err){
     res.status(500).json({
       err: err

     });
   }
    res.status(200).json({
     albums: foundAlbums
   });
  });
});
router.get('/albums/id:', function(req, res){
   Album.find({_id: req.params.id}, function(err, foundAlbum){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      album: foundAlbum
    });

  });
});

router.post('/albums', function(req, res){


  var album = new Album(req.body);
  album.save(function(err){
    if(err){

  res.status(500).json({

    err: err
  });
}
res.status(201).json({
  msg: 'succefully created album'
});
  });

});

router.put('/boxes/id:', function(req, res){});
router.delete('/boxes/id:', function(req, res){});

module.exports = router;
