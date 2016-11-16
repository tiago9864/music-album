var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumSchema = new Schema({
   title : {
       type: String,
       required: true
     },
   artist: {
      type: String,
      required: true
   },
   releaseDate: {
     type: Date,
     required: true
   },

   isGood:{
     type: Boolean,
     required: true
   },

   genre:{
     type: String,
     required: true
   }
});

var Album = mongoose.model('Album', albumSchema);
module.exports = Album;
