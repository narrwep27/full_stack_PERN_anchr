const express = require('express');
const cors = require('cors');
const logger = require('morgan');
//Add path to AuthRouter when written
//Add path to PostRouter when written
const routes = require('./routes/');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use('/api', routes);


app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
