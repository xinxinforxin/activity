module.exports = function(router) {

	router.get('/', function(req, res) {
		res.redirect('/guide');
	});

	router.get('/guide', function(req, res) {
		res.render('guide/index');
	});
	router.get('/mobileabout', function(req, res) {
		res.render('mobileabout/index');
	});
	router.get('/mobilebanner', function(req, res) {
		res.render('mobilebanner/index');
	});

};