const express = require('express');
const app = express();
const port = 51245;

app.get('/', (req, res) => res.send(new Date().toString()));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));