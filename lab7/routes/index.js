const recipes = require("./recipes");

const constructorMethod = (app) => {
    app.use("/", recipes);
    

    app.use("*", (req, res) => {
        res.sendStatus(404);
    })
};

module.exports = constructorMethod;