var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var musicboxSchema = new Schema({
   description: {
      type: String,
      required: true

   }

});

var Musicbox = mongoose.model('Musicbox', musicboxSchema);
module.exports = Musicbox;
