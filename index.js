const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//DB Connection
mongoose
  .connect('mongodb://localhost:27017/bewgleProcess', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('DB CONNECTED');
  });

// Routes
const processRoute = require('./routes/process.route');
const statsRoute = require('./routes/stats.route');

// middleware
app.use('/process', processRoute);
app.use('/stats', statsRoute);

// server
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
