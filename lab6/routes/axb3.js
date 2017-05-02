const express = require('express');
const router = express.Router();

router.get("",(req,res) => {
	var obj=[
		{
		  "schoolName": "Stevens Institute of Technology",
		  "degree": "Master of Science- Computer Science",
		  "favoriteClass": "Web Programming",
		  "favoriteMemory": "Orientation"
		},
		{
		  "schoolName": "Punjab Technical University",
		  "degree": "Bachelor of Technology- Information Technology",
		  "favoriteClass": "Maths, Object Oriented Programming",
		  "favoriteMemory": "Technical Festival, Counter Strike 5v5, 1st place"
		}
	]
	res.json(obj);
});	
module.exports = router;