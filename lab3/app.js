const xyz=require("./fileData");
const abc=require("./textMetrics");
var fileExists = require('file-exists');

function fileEx(path) {
	try {
		if(fileExists(path))
			return true;
		else
			return false;
	}
	catch(err) {
		return false;
	}
}

let result1a=xyz.getFileAsJSON("chapter1.result.json");
result1a.then((data) => {
	console.log(data);
},(err) =>{
	let result1e=xyz.getFileAsString("chapter1.txt");
	result1e.then((e) => {
		let simplifiedText=abc.simplify(e);
		xyz.saveStringToFile("chapter1.debug.txt",simplifiedText);
		return simplifiedText;
	},(err)=>{
		
	}).then((e)=>{
		let obj=abc.createMetrics(e);
		xyz.saveJSONToFile("chapter1.result.json",obj);
		console.log(obj);	//console.log(JSON.stringify(obj));
	}, (err) => {
	
	});	
});

let result1b=xyz.getFileAsJSON("chapter2.result.json");
result1b.then((data) => {
	console.log(data);
},(err) =>{
	let result1e=xyz.getFileAsString("chapter2.txt");
	result1e.then((e) => {
		let simplifiedText=abc.simplify(e);
		xyz.saveStringToFile("chapter2.debug.txt",simplifiedText);
		return simplifiedText;
	},(err)=>{
		
	}).then((e)=>{
		let obj=abc.createMetrics(e);
		xyz.saveJSONToFile("chapter2.result.json",obj);
		console.log(obj);
	}, (err) => {
	
	});	
});

let result1c=xyz.getFileAsJSON("chapter3.result.json");
result1c.then((data) => {
	console.log(data);
},(err) =>{
	let result1e=xyz.getFileAsString("chapter3.txt");
	result1e.then((e) => {
		let simplifiedText=abc.simplify(e);
		xyz.saveStringToFile("chapter3.debug.txt",simplifiedText);
		return simplifiedText;
	},(err)=>{
		
	}).then((e)=>{
		let obj=abc.createMetrics(e);
		xyz.saveJSONToFile("chapter3.result.json",obj);
		console.log(obj);
	}, (err) => {
	
	});	
});

