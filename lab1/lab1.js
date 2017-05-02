/*
*	Name-Yugaank Arun Sharma
*	Course-CS-546
*	CWID-10419077
*	Lab-1 	
*/

//function 1
function sumOfSquares(num1, num2, num3) {
	if (typeof(num1)==='number'&&typeof(num2)==='number'&&typeof(num3)==='number')
		return num1*num1+num2*num2+num3*num3;
	else 
		//console.log(typeof(num1),typeof(num2),typeof(num3))
		throw "invalid numbers";
}

//function 2
function sayHelloTo(firstName, lastName, title) {
		if(typeof firstName=='string' && firstName!=undefined && lastName===undefined && title===undefined) {
			console.log("Hello, "+firstName+"!");
		}
		else if (typeof firstName=='string'&& typeof lastName=='string'&& firstName!=undefined && lastName!=undefined && title==undefined) {
			console.log("Hello, "+firstName+" "+lastName+". I hope you are having a good day!");
		}
		else if (typeof firstName=='string'&& firstName!=undefined&&typeof lastName=='string'&&lastName!=undefined&&typeof title=='string'&&title!=undefined) {
			console.log("Hello, "+title+" "+firstName+" "+lastName+"! Have a good evening!");
		}
		else if (firstName===undefined&&typeof lastName=='string'&&lastName!=undefined&&typeof title=='string'&&title!=undefined) {
			console.log("Hello, "+title+" "+lastName+"! Have a good day!");
		}
		 else
			throw "Error";
}	

//function 3 	
function cupsOfCoffee(howManyCups) {
	if (typeof(howManyCups)!='number')
		throw "error";
	else 
	{
		for (let i=howManyCups;i>=1;i--) {
			if(i===1)
				console.log(i.toString()+" cup of coffee on the desk! "+i.toString()+" cup of coffee!\nPick one up, drink the cup, no more coffee left on the desk!\n");
			else if ((i-1)!=1)
				console.log(i.toString()+" cups of coffee on the desk! "+i.toString()+" cups of coffee!\nPick one up, drink the cup, "+(i-1).toString()+" cups of coffee on the desk!\n");
			else 
				console.log(i.toString()+" cups of coffee on the desk! "+i.toString()+" cups of coffee!\nPick one up, drink the cup, "+(i-1).toString()+" cup of coffee on the desk!\n");
		}
	}
}

//function 4
function countOccurrencesOfSubstring(fullString, substring) {
	if((typeof(fullString)!='string')||('string'!=typeof(substring)))
		throw "error";
	else
	{
		var count=0;
		while(fullString.indexOf(substring)>-1) {
			i=fullString.indexOf(substring);
			count++;
			fullString=fullString.slice(i+1);
		}
		return count;
	}
}

//function 5
function randomizeSentences(paragraph) {
	// var sentences=paragraph.split(/[.?!]\s*/);
	if(typeof(paragraph)!='string')
		throw "error";
	else
	{
		var x=0;
		var sentences=[];
		for (let i=0;i<paragraph.length;i++) {
		if (paragraph[i] == '.'||paragraph[i] == '?'||paragraph[i] == '!') {
				sentences.push(paragraph.slice(x,i+1));
				x=i+2;
			}
		}
		var currentIndex=sentences.length;
		var randomIndex,temp;
		while(true) {
			randomIndex=Math.floor(Math.random()*currentIndex);
			temp=sentences[currentIndex];
			sentences[currentIndex]=sentences[randomIndex];
			sentences[randomIndex]=temp;
			currentIndex--;
			if(currentIndex==0)
				break;
		}
		return sentences.join(" ");
	}
}

console.log("Function 1-Sum of Squares of three numbers\n");
try {
console.log(sumOfSquares(5, 3, 10));
}
catch(e) {
	console.log("Not a number");
}
console.log("\nFunction 2- say Hello to, different test cases..\n");
try {
	sayHelloTo("Yugaank"); // throws 
}
catch(e) {
	console.log("Not a name\n");
}
console.log("\nFunction 3- cupsOfCoffee\n");
try {
	cupsOfCoffee(5);
}
catch(e) {
	console.log("Not a valid cups of coffee\n");
}
	
console.log("Function 4- countOccurrencesOfSubstring\n");
try {
	console.log(countOccurrencesOfSubstring("Helllllllo, class!", "ll"));
}
catch(e) {
	console.log("Not a valid string or strings\n");
}
console.log("\nFunction 5- randomizeSentences\n");
try {
	var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
	console.log(randomizeSentences(paragraph));
}
catch(e) {
	console.log("Not a valid paragraph\n");
}

