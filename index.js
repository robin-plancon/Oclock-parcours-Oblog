const express = require('express');

const app = express();
const port = 5050;

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/integration/index.html`);
});

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});
