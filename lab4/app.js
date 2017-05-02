const td=require("./todo")

let cleardb=td.removeAll();
cleardb.then(()=>{console.log("all documents cleared");return});

let Tasks=td.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
Tasks.then((e) =>{
	console.log("Create a task with the following details:");
	console.log(e);
	return td.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
}, (err)=>{
	console.log(err);
}).then((e)=>{
	console.log("Create a task with the following details:");
	console.log(e);
	return td.getAllTasks();
}, (err)=>{
	console.log(err);
}).then((e)=>{
	console.log("\nQuery all tasks and log them");
	console.log(e);
	return td.remove(e[0]._id);
}, (err)=>{
	console.log(err);
}).then(()=>{
	console.log("\nFirst Task Removed");
	return td.getAllTasks();
}, (err)=>{
	console.log(err);
}).then((e)=>{
	console.log("\nRemaining Task");
	console.log(e);
	//return td.completeTask(e[0]._id)
	for(let y=0;y<e.length;y++)
		td.completeTask(e[y]._id);
	return td.getAllTasks();
}, (err)=>{
	console.log(err);
}).then((e)=>{
	console.log("\nRemaining Task Completed");
	console.log(e);
	process.exit();
}, (err)=>{
	console.log(err);
});