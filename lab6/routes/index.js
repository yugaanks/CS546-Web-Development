const axb = require("./axb");
const axb2 = require("./axb2");
const axb3 = require("./axb3");
const constructorMethod = (app) => {
	app.use("/about", axb);
	app.use("/education", axb2);
	app.use("/story", axb3);
    app.use("*", (req, res) => {
        res.status(404).json({error: "Not found"});
    });
};
module.exports = constructorMethod;