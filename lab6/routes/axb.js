const express = require('express');
const router = express.Router();

router.get("",(req,res) =>{
	var obj={
			"name": "Yugaank Sharma",
			"biography": "My name is Yugaank Arun Sharma. 23yo. I am from Delhi, India.\nI am a graduate student at Stevens Institute of Technology and currently pursuing Masters in Computer Science.",
			"favoriteShows": ["Game of Thrones", "Arrested Development", "Rick and Morty", "Breaking Bad","True Detective","Sherlock"],
			"hobbies": ["Music", "Video Games", "Cooking"]
	}
	res.json(obj);
	});
// router.get("/story",(req, res) => {
	// var obj={
		// "storyTitle": "That time I got hit by a paint ball on my face",
		// "story": "It's 2011, the time when I was doing my undergraduation. It was 5 °C outside and me and my friends decided to go play some paint ball in this weather. We never played the game before so had no idea how hard the paint ball hits if you are not wearing any safety gear. So after we arrived, put on a big suit, didn't wore any glass mask yet, cause instructor wants to go over some rules after he puts some of his stuff back in the office. So one of my friend just randomly pointed the gun at me I didn't thought he would pull the trigger cause I wan't wearing the protective face shield or whatever. But he did. Not only he shot me, but also aimed it towards my face! And to top it, I was also in a very close range. As soon as paint ball hit me, Instructor came running and looked over my injury. There was some blood and obviously it hurts like hell when you get hit by a paint ball on the face. Now to give you a image, Imagine falling into a swimming pool from 20m height and body flat like hitting water palm first. Ofcourse the guy apologizedand I forgive him immediately cause we are good friends. And we still played the game. That day we realized how hard a paint ball hits. Fun day!"
	// }
	// res.json(obj);
// });

// router.get("/education",(req,res) => {
	// var obj=[
		// {
		  // "schoolName": "Stevens Institute of Technology",
		  // "degree": "Master of Science- Computer Science",
		  // "favoriteClass": "Web Programming",
		  // "favoriteMemory": "Orientation"
		// },
		// {
		  // "schoolName": "Punjab Technical University",
		  // "degree": "Bachelor of Technology- Information Technology",
		  // "favoriteClass": "Maths, Object Oriented Programming",
		  // "favoriteMemory": "Technical Festival, Counter Strike 5v5, 1st place"
		// }
	// ]
	// res.json(obj);
// });	
module.exports = router;