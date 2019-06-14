const express = require('express');
const app = express();

const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

// app.set:
app.set('view engine', 'ejs');

// Set app port:
app.set('port',process.env.PORT || 5555);

// using json sending;
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());


//requiring routes
var requestEmgRoute    = require("./routes/request_emg"),
    responseEmgRoute  = require("./routes/response_emg");


//assing routes
app.use("/reqemg", requestEmgRoute);
app.use("/resemg", responseEmgRoute);

app.listen(app.get('port'), function () {
    console.log("server start on port : " + app.get('port'));
});