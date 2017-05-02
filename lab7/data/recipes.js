const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllRecipes() {
        return recipes().then((recipeCollection) => {
            return recipeCollection
                .find({})
                .toArray();
        });
    },
    getRecipeById(id) {
		if(!id)
			return Promise.reject("Invalid Id provided");
        return recipes().then((recipeCollection) => {
            return recipeCollection
                .findOne({_id: id})
                .then((recipe) => {
                    if (!recipe) 
                        throw "Recipe not found";
                    return recipe;
                });
        });
    },
    addRecipe(title, ingredients, steps, comments) {
        if (typeof title !== 'string') 
            return Promise.reject("No title provided");

        if (!Array.isArray(ingredients)) {
            ingredients = [];
        }
        if (!Array.isArray(steps)) {
            steps = [];
        }
		if (!Array.isArray(comments)) {
            comments = [];
        }
        return recipes().then((recipeCollection) => {
            let newPost = {
				title: title,
				ingredients: ingredients,
				steps: steps,
				_id: uuid.v4(),
				comments: []
			};
			for(let i=0;i<comments.length;i++){
				newPost.comments.push( { _id:uuid.v4(), poster:comments[i].poster, comment:comments[i].comment } );
			}

			return recipeCollection
				.insertOne(newPost)
				.then((newInsertInformation) => {
					return newInsertInformation.insertedId;
				})
				.then((newId) => {
					return this.getRecipeById(newId);
				});
		});
    },
    removeRecipe(id) {
		if(!id)
			return Promise.reject("No ID provided");
        return recipes().then((recipeCollection) => {
            return recipeCollection
                .removeOne({_id: id})
                .then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw(`Could not delete recipe with id of ${id}`)
                    } else {}
                });
        });
    },
    updateRecipe(id, updatedRecipe) {
		return recipes().then((recipeCollection) => {
            let updatedRecipeData = {};

            if (updatedRecipe.steps) {
                updatedRecipeData.steps = updatedRecipe.steps;
            }

            if (updatedRecipe.title) {
                updatedRecipeData.title = updatedRecipe.title;
            }

            if (updatedRecipe.ingredients) {
                updatedRecipeData.ingredients = updatedRecipe.ingredients;
            }

			
			
            let updateCommand = {
                $set: updatedRecipeData
            };

            return recipeCollection.updateOne({
                _id: id
            }, updateCommand).then((result) => {
                return this.getRecipeById(id);
            });
        });
    },
	getAllCommentsOfRecipe(recipeId) {
		if(!recipeId)
			throw "invalid input";
		return recipes().then((recipeCollection) => {
			return recipeCollection
				.findOne({_id:recipeId})
				.then((recipe) =>{
					if(!recipe)
						throw "recipe not found";
					var t=[]
					for(let i=0;i<recipe.comments.length;i++) {
						t.push({
							_id:recipe.comments[i]._id,
							recipeId:recipe._id,
							recipeTitle:recipe.title,
							poster:recipe.comments[i].poster,
							comment:recipe.comments[i].comment
						});
					}
					return t;
				});
		});
	},
	getCommentOfRecipe(commentId) {
		if(!commentId)
			throw "invalid input";
		return recipes().then((recipeCollection) =>{
			return recipeCollection
				.findOne({'comments._id':commentId})
				.then((recipe) => {
					if(!recipe)
						throw "recipe not found";
					for(let i=0;i<recipe.comments.length;i++) {
						if(recipe.comments[i]._id==commentId)
							return {_id:recipe.comments[i]._id,
									recipeId:recipe._id,
									recipeTitle:recipe.title,
									poster:recipe.comments[i].poster,
									comment:recipe.comments[i].comment
									};
					}
					throw "comment not found";
				});
		});
	},
	addCommentToRecipe(comment,recipeId) {
		if(!comment || !recipeId)
			return Promise.reject("Invalid input");
		return recipes().then((recipeCollection) =>{
			return recipeCollection
				.findOne({_id:recipeId})
				.then((recipe) => {
					if(!recipe)
						throw "recipe not found";
					return recipeCollection
						.update({_id:recipeId} , {$push : {"comments" : {_id: uuid.v4(),poster:comment.poster, comment:comment.comment }} })
						.then((result) => {
							return comment;
						});
					return comment;
				});
		});
	},
	updateCommentOfRecipe(updatedComment,commentId,recipeId) {
		return recipes().then((recipeCollection) => {
            let updatedCommentData = {};
			updatedCommentData._id=commentId;
            if (updatedComment.poster) {
                updatedCommentData.poster = updatedComment.poster;
            }

            if (updatedComment.comment) {
                updatedCommentData.comment = updatedComment.comment;
            }

            return recipeCollection
				.update( {_id:recipeId, "comments._id":commentId}
				,{$set :{"comments.$":updatedCommentData}}).then((result) =>{
					//console.log(result);
					return recipeCollection
						.findOne({_id:recipeId})
						.then((recipe) => {
							if(!recipe)
								throw "recipe not found";
							for(let i=0;i<recipe.comments.length;i++) {
								if(recipe.comments[i]._id==commentId)
									return {_id:recipe.comments[i]._id,
											poster:recipe.comments[i].poster,
											comment:recipe.comments[i].comment
											};
							}
					throw "comment not found";
				});
			});
        });
	},
	removeCommentOfRecipe(id) {
		if(!id)
			return Promise.reject("Id value is invalid");
        return recipes().then((recipeCollection) => {
            return recipeCollection.
			update({},{$pull:{comments:{_id:id}}},{multi:true});
        });
    }
}

module.exports = exportedMethods;