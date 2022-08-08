const express = require('express');
const router = require('../config/routes');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({origin: '*'}));
app.use(router);


module.exports = app