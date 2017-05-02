// lab 2- cs 546
// submitted by- Yugaank Arun Sharma

const xd=require("./printShape");
function print() {
	for (let i=1;i<=10;i++)				//printing 10 triangles
	{	
		try {
			xd.triangle(5);
		}
		catch(err) {
			console.error(err);
			break;
		}
	}
	for(let i=2;i<=11;i++) 				//printing 10 squares
	{	
		try {
			xd.square(i);
		}
		catch(err) {
			console.error(err);
			break;
		}
	}
	for(let i=2;i<=20;i+=2)				// printing 10 rhombuses
	{	
		try {
			xd.rhombus(6);
		}
		catch(err) {
			console.error(err);
			break;
		}
	}
}

print();