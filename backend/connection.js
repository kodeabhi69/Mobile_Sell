require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://thapa2002:thapa@cluster0.8ycotgp.mongodb.net/";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err));

mongoose.connection.on('error', err => {
  console.log(err)
});

