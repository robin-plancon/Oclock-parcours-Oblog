const express = require('express');
const articles = require('./data/articles.json');

const app = express();
const port = 5050;

// configuration to use ejs
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('static'));

// set my articles data to use it globally in my views
app.locals.myArticles = articles;

// default route that render index page
app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});
