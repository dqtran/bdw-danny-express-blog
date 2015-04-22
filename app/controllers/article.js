var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');
  posts = require('../../config/posts');

module.exports = function (app) {
  app.use('/article', router);
};


/****************************************/
/**************** List ******************/
/****************************************/
router.get('/', function (req, res, next) {
	Article.find({}, function(err, articles) {
		console.log('articles', articles);
		if(err) return next(err)
		res.render('article/list', {
		      title: 'My Medium Posts',
		      articles: articles
		});
	});
});


/****************************************/
/**************** Show ******************/
/****************************************/
router.get('/:id', function (req, res, next) {
	var id = req.params.id;
	// Article.findById(req.params.id, function(err, post) {
	Article.findOne({ _id: id }, function(err, article) {	
		console.log('articles', article);
		if(err) return next(err)
		res.render('article/show', {
		      title: 'My Post',
		      article: article,
		      // flash: req.flash('success')[0]
		});
	});	  
});

/****************************************/
/**************** Edit ******************/
/****************************************/
// GET http://localhost:3000/article/:id/edit - edit form
router.get('/:id/edit', function (req, res, next) {

    var id = req.params.id;
    // find all articles in the mongo db
    Article.findOne({ _id: id }, function(err, article){
    		if(err) return next(err)
        res.render('article/edit', { // REMINDER: render vs. json
          title: 'BDW - Blog',
          article: article // return all articles to the list.swig
        });
    });
});

// POST http://localhost:3000/article/:id - edit form submission
router.post('/:id', function (req, res, next) {

    var id = req.params.id;
    console.log(req.body);

    Article.findOneAndUpdate({ _id: id }, req.body, function(err, article){
        console.log(article);
        if(err) return next(err);
      	res.redirect('/article/' + article.id);
      	// req.flash('success', 'Updated!');
    });
});

/****************************************/
/**************** Create ****************/
/****************************************/
router.get('/', function (req, res, next){
		// var id = req.params.id
		Article.find({}, function(err, article){
    	if(err) return next(err)
			res.render('article/create', {
				title: 'BDW - Blog',
				article: article
			});
	});
});

router.post('/create', function (req, res, next){
		console.log(req.body);
		Article.create(req.body, function(err, article){
			if(err) return next(err)
   		res.redirect('/article' + article.id);
	});
});


/****************************************/
/*************** Database ***************/
/****************************************/
router.get('/bootstrap', function (req, res, next) {
	console.log(posts)
	Article.create(posts.posts, function(err, articles){
			if(err) return next(err)
      res.send(articles);
	});
});
