const express = require('express');
const articles = require('./data/articles.json');

const router = express.Router();

// default route that render index page
router.get('/', (req, res) => {
	res.render('index');
});

// specific route to display an article
router.get('/article/:id', (req, res, next) => {
	const { id } = req.params;
	// search if an article have the same id  in data
	const foundedArticle = articles.find((article) => article.id === parseInt(id, 10));
	if (!foundedArticle) {
		return next();
	}
	return res.render('article', { article: foundedArticle });
});

// specific route to display articles of the same category
router.get('/articles/:category', (req, res, next) => {
	const { category } = req.params;
	const foundedArticles = articles.filter((article) => article.category === category);
	if (!foundedArticles) {
		return next();
	}
	return res.render('category-articles', { articles: foundedArticles });
});

module.exports = router;
