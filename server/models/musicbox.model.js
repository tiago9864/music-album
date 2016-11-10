var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumSchema = new Schema({
   description: {
      title: String,
      artist: String,
      releaseDate: Date,
      isGood: Boolean


   }

});

var Album = mongoose.model('Album', albumSchema);
module.exports = Album;
