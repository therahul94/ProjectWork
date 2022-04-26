const express = require('express');         //1
const bodyParser = require('body-parser');        //2
const route = require('./routes/route.js');        //3
const { default: mongoose } = require('mongoose');       //4
const app = express();

app.use(bodyParser.json());                        //5
app.use(bodyParser.urlencoded({ extended: true }));         //6


mongoose.connect("", {                  //11-15
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
