const express=require("express");
const bodyParser = require("body-parser");
var app=express();
var exphbs  = require('express-handlebars');
const static = express.static(__dirname + '/public');
app.use( bodyParser.urlencoded( {
    extended: true
} ) );

app.use( bodyParser.json() );
const configRoutes = require("./routes");


app.use("/public", static);
app.engine('handlebars', exphbs({defaultLayout: 'main',
    helpers: {
        asJSON: (obj, spacing) => {
            if(typeof spacing == 'number') 
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing))

            return new Handlebars.SafeString(JSON.stringify(obj));
        }
    }}));
app.set('view engine', 'handlebars');


configRoutes(app);

app.listen(3000, () => {
	console.log("We've now got a server");
	console.log("Your routes will be running on http://localhost:3000");
});