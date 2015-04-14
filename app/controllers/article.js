var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');
  posts = require('../../config/posts');

module.exports = function (app) {
  app.use('/article', router);
};

router.get('/', function (req, res, next) {
	Article.find({}, function(err, articles) {
		console.log('articles', articles);
		res.render('article/list', {
		      title: 'My Medium Posts',
		      articles: articles
		});
	});
});

router.get('/:id', function (req, res, next) {
	Article.findById(req.params.id, function(err, post) {
		console.log('post', post);
		res.render('article/show', {
		      title: 'My Post',
		      articles: post
		});
	});	  
});

// router.get('/bootstrap', function (req, res, next) {
// 	console.log(posts)
// 	Article.create(posts.posts, function(err, articles){
//       res.send(articles);
// 	});
// });

// localhost:3000/article