require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require("./db");
let journal = require("./controllers/journalcontroller");
let user = require("./controllers/usercontroller");

sequelize.sync();
app.use(express.json());
app.use("/user", user);
app.use(require('./middleware/validate-session'));
app.use('/journal', journal)
app.use(require('./middleware/headers'));

app.use("/test", function (req, res) {
    res.send("This is a test route");
});

app.use("/about-me", function (req, res) {
    res.send("My name is Adam my age is 31");
});

app.listen(3000, function(){
    console.log('app is listening on port 3000');
});





