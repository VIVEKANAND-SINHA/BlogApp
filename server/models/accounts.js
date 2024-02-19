var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  title: String,
  subtitle: String,
  // other fields...
});

mongoose.model("News", newsSchema);
