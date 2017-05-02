const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/recipes", (req, res) => {
    recipeData.getAllRecipes().then((recipeList) => {
        res.json(recipeList);
    });
});

router.get("/recipes/:id", (req, res) => {
    recipeData.getRecipeById(req.params.id).then((recipe) => {
        res.json(recipe);
    }).catch(() => {
        res.status(404).json({ error: "Recipe not found" });
    });
});

router.post("/recipes", (req, res) => {
    let bodyRecipeData = req.body;
	console.log(req.body)
	recipeData.addRecipe(bodyRecipeData.title,bodyRecipeData.ingredients,bodyRecipeData.steps,bodyRecipeData.comments)
		.then((newRecipe) =>{
			res.json(newRecipe);
		}).catch((e)=>{
			res.status(500).json({error:e});
		});
});

router.put("/recipes/:id", (req, res) => {
    let updatedData = req.body;

    let getRecipe = recipeData.getRecipeById(req.params.id);

    getRecipe.then(() => {
        return recipeData.updateRecipe(req.params.id, updatedData)
            .then((updatedRecipe) => {
                res.json(updatedRecipe);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Recipe not found" });
    });

});

router.delete("/recipes/:id", (req, res) => {
    let getRecipe = recipeData.getRecipeById(req.params.id);

    getRecipe.then(() => {
        return recipeData.removeRecipe(req.params.id)
            .then(() => {
                res.sendStatus(200);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Post not found" });
    });
});

router.get("/comments/recipe/:recipeId", (req, res) => {
    recipeData.getAllCommentsOfRecipe(req.params.recipeId).then((recipe) => {
        res.json(recipe);
    }).catch(() => {
        res.status(404).json({ error: "Recipe not found" });
    });
});

router.get("/comments/:commentId", (req, res) => {
    recipeData.getCommentOfRecipe(req.params.commentId).then((recipe) => {
        res.json(recipe);
    }).catch(() => {
        res.status(404).json({ error: "Recipe not found" });
    });
});

router.post("/comments/:recipeId", (req, res) => {
    let bodyCommentData = req.body;
	recipeData.addCommentToRecipe(bodyCommentData,req.params.recipeId)
		.then((newComment) =>{
			res.json(newComment);
		}).catch((e)=>{
			res.status(500).json({error:e});
		});
});

router.put("/comments/:recipeId/:commentId", (req, res) => {
    let updatedData = req.body;

    // let getRecipe = recipeData.getRecipeById(req.params.recipeId);

    // getRecipe.then(() => {
    return recipeData.updateCommentOfRecipe(updatedData,req.params.commentId,req.params.recipeId)
		.then((updatedComment) => {
			//console.log(updatedComment);
			res.json(updatedComment);
		}).catch((e) => {
			res.status(500).json({ error: e });
		});
    // }).catch(() => {
        // res.status(404).json({ error: "Recipe not found" });
    // });

});

router.delete("/comments/:id", (req, res) => {
    recipeData.removeCommentOfRecipe(req.params.id)
		.then(() => {
			res.sendStatus(200);
		}).catch((e) => {
			res.status(500).json({ error: e });
		});
});
module.exports = router;