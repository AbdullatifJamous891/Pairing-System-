const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const appRouter = require('./routes/appRoutes');

app.use('/', appRouter);



app.listen(port, ()=> {
    console.log(`your server is runing on port ${port}`);
});
