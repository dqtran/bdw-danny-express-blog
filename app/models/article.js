// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  url: String,
  description: String,
  categories: Array,
  author: String,
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now },
});

ArticleSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Article', ArticleSchema);

