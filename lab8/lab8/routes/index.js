var palindromeRoute=require('./abc')
const path=require('path');
const constructorMethod = (app) =>{
	//app.use("/",abc);
	app.use("/",palindromeRoute);
	app.use("*", (req,res) =>{
		res.redirect('/');
	});
};
module.exports = constructorMethod;