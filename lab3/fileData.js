const fs = require('fs');
let fd = exports = module.exports;

fd.getFileAsString=(path) => {
	return new Promise((fulfill,reject) => {
		if (!path || path===undefined)
		{
			reject("not a valid path");
			//return;
		}	
		
		try {
			var text=fs.readFileSync(path,"utf-8");
			fulfill(text)
			
		}
		catch(err) {
			reject(err);
		}
	});
}
fd.getFileAsJSON=(path) => {
	return new Promise((fulfill,reject) => {
		if (!path || path===undefined)
		{
			reject("not a valid path");
		}	
		
		try {
			var text=fs.readFileSync(path,"utf-8");
			let jsonD=JSON.parse(text);
			fulfill(jsonD);
		}
		catch(err) {
			reject(err);
		}
	});
}

fd.saveStringToFile=(path, text) => {
	return new Promise((fulfill,reject)=> {
		if (typeof (path)!='string' || path===undefined || text===undefined || typeof (text)!='string')
		{
			reject("not a valid path");
			return;
		}	
		
		fs.writeFile(path,text, function(err) {
			if(err) {
				reject(err);
				return;
			}
			fulfill(true);
		});
	});
}

fd.saveJSONToFile=(path, obj) => {
	return new Promise((fulfill,reject) => {
		if(!path || obj===undefined){
			reject("Error");
			return;
		}
		fs.writeFile(path,JSON.stringify(obj), function(err) {
			if(err) {
				reject(err);
				return;
			}
			fulfill(true);
		});
	});
}