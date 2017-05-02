//module
let ps=exports=module.exports;
ps.triangle=(lines)=> {
	if (lines===undefined||lines<=0|| !Number.isInteger(lines)) {
		throw "Invalid number of lines";
	}
	temp2=lines;
	for(let i=0;i<lines;i++) {
		if(i==lines-1) {
			temp1="-".repeat(2*i);
			console.log("/"+temp1+"\\");
			break;
		}
		temp2--;
		temp3=" ".repeat(temp2)
		temp1=" ".repeat(2*i);
		console.log(temp3+"/"+temp1+"\\");
		//console.log(lines/2)
	}
}

ps.square=(lines)=>{
	if (lines===undefined||lines<2 || !Number.isInteger(lines)){
		throw "atleast 2 lines";
		return;
	}
	
	for (let i=0;i<lines;i++) {
		if(i==0||i==lines-1)
		{
			temp="-".repeat(lines);	
			console.log("|"+temp+"|");
		}
		else {
			temp=" ".repeat(lines);
			console.log("|"+temp+"|");
		}
	}
}

ps.rhombus=(lines)=> {
	if (lines===undefined||lines<2 || lines%2!=0 || !Number.isInteger(lines)){
		throw "atleast 2 lines or even number of lines";
		return;
	}
	temp=lines/2;
	for(let i=0;i<lines/2;i++) {
		if(i===0) {
			temp--;
			let temp1=" ".repeat(temp);
			let temp2=" ".repeat(2*i);
			console.log(temp1+"/-"+temp2+"\\");
		}
		else {
			temp--;
			let temp1=" ".repeat(temp);
			let temp2=" ".repeat(2*i+1);
			console.log(temp1+"/"+temp2+"\\");	
		}
	}
	temp=lines;
	for(let i=0;i<lines/2;i++) {
		if(i==lines/2-1){
			let temp1=" ".repeat(i);
			let temp2=" ".repeat(temp);
			console.log(temp1+"\\-"+"/");
			break;
		}
		else {
			temp-=2;
			let temp1=" ".repeat(i);
			let temp2=" ".repeat(temp+1);
			console.log(temp1+"\\"+temp2+"/");
		}
	}
}
