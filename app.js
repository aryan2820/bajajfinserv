const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./Routes/bfhlRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/bfhl', bfhlRoutes);

module.exports = app;

// server.js
const app = require('./src/app');
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});