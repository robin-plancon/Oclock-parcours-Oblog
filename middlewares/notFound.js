// a middleware to display an error when page not found
const notFound = (req, res) => {
	res.status(404);
	res.render('not-found');
};

module.exports = notFound;
