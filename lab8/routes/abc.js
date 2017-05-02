const express=require('express');
const router=express.Router();
const data=require('../data/index');
const palindrome=data.palindrome;
router.get("/",(req,res) => {
	res.render('other/static');
});

router.post("/", (req,res)=>{
	var xd=req.body.palindrome;
	//console.log(xd);
	var isPalindrome=false;
	if(palindrome.isPalindrome(xd))
		isPalindrome=true;
	res.render('other/server', {isPalindrome:isPalindrome});
});
module.exports = router;