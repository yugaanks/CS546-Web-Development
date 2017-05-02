const mongoCollections = require("./mongoCollections");
const todo=mongoCollections.todoItems;
const uuidV4 = require('uuid/v4');
let td=exports=module.exports;

td.createTask=(title, description) =>{
	if(!title ||!description)
		return Promise.reject("Title or description not specified");
	return todo().then((toCollection) => {
		let obj={
			_id: uuidV4(),
			title: title,
			description: description,
			completed: false,
			completedAt: null
		} 

		return toCollection
			.insertOne(obj)
			.then((newInsertInformation) => {
				return newInsertInformation.insertedId;
			}, (err)=>{
				return new Promise.reject("task cannot be created");
			}).then((newId) => {
				return this.getTask(newId);
			}, (err)=>{
				return new Promise.reject("error getting the new created task");
			});
	},(err)=>{
		return Promise.reject("error creating task");
	});
}

td.getAllTasks=() => {
	return todo().then((toCollection)=>{
		return toCollection.find().toArray();
	},(err)=>{
		return Promise.reject("error getting all the tasks");
	});
}

td.getTask=(id) =>{
	if (!id) 
		return Promise.reject("You must provide an id to search for");   
	return todo().then((toCollection) => {
			return toCollection.findOne({_id: id});
		}, (err)=>{
			return new Promise.reject("id doesn't exists");
	});
}

td.completeTask=(id)=>{
	if(!id)
		return Promise.reject("You must provide an id");
	return todo().then((toCollection)=>{
		return toCollection.update(
			{_id:id},
			{$set:
				{
					completed: true,
					completedAt:Date()
				}
			}
		).then(()=>{
			return this.getTask(id);
		}, (err)=>{
			return new Promise.reject("task cannot be completed")
		});
	}, (err)=>{
			return new Promise.reject("task cannot be completed")
	});
}

td.remove=(id)=>{
	if (!id) 
            return Promise.reject("You must provide an id to search for");
        
        return todo().then((toCollection) => {
            return toCollection
                .removeOne({_id: id})
                .then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        return Promise.reject("Error deleting the task");
                    }
					
                },(err)=>{
					return Promise.reject("Error!! in deletion")
				});
        },(err)=>{
			return Promise.reject("Error removing a task")
		});
}

td.removeAll=()=>{			//created extra function to clear the collection
	return todo().then((toCollection)=>{
		return toCollection.remove()
	}, (err)=>{
		return Promise.reject("error removing all tasks")
	});
} 