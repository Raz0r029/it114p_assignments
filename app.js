const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

const accountRoutes = require('./routes/userAccount')
const viewRoutes = require('./routes/viewUser')

app.use(bodyParser.urlencoded({extended: false}));

app.use(accountRoutes);
app.use(viewRoutes);

app.listen(3000);