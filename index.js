const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const appRouter = require('./routes/appRoutes');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/pairingSystem', { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use('/', appRouter);


app.listen(port, ()=> {
    console.log(`your server is runing on port ${port}`);
});
