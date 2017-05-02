
let tm=exports=module.exports;

tm.simplify=(text)=> {
	//console.log(typeof(text),"  ",text);
	text=text.toLowerCase();
	text=text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
	text = text.replace(/\s{2,}/g, " ");
	text=text.replace(/['"?=\n]+/g, '');
	//text=text.replace(/[]/g,'')
	//console.log(text)
	return text;
}

tm.createMetrics=(text)=> {
	text=tm.simplify(text);
	var allwords=text.split(" ");
	var unique=allwords.filter(function(elem,index,self) {
		return index==self.indexOf(elem);
	});
	
	var metric={
		totalLetters:0,
		totalWords:0,
		uniqueWords:unique.length,
		longWords:0,
		averageWordLength:0,
		wordOccurrences:{}
	};
	for(let i in allwords){
		if(allwords[i].length>=6)
				metric.longWords++;
	}
	//console.log(text)
	for (let i =0;i<text.length;i++) {
		if((text[i]>='a'&&text[i]<='z') || (parseInt(text[i])>=0&&parseInt(text[i])<=9))//!=text[i].toUpperCase()
			metric.totalLetters++;	
		if(text[i]===" ")
			metric.totalWords++;
		
	}
	for(let i in unique){
		temp=0;
		for(let j in allwords){
			if(unique[i]===allwords[j])
				temp++;
		}
		metric.wordOccurrences[unique[i]]=temp;	
	}
	/* var sortable = [];
	for (var i in metric.wordOccurrences)
		sortable.push([i, metric.wordOccurrences[i]])

	sortable.sort(function(a, b) {
		return a[1] - b[1]
	})
	//sortable.reverse();
	//console.log(sortable);
	function objectify(array) {
    return array.reduce(function(p, c) {
         p[c[0]] = c[1];
         return p;
		}, {}
	);
	} */	
	//metric.wordOccurrences=objectify(sortable);
	metric.totalWords++;		//count the last word
	metric.averageWordLength=metric.totalLetters/metric.totalWords;
	//list=metric.wordOccurrences
	return metric;
}
console.log(tm.createMetrics("Hello, my friends! This is a great day to say hello.\n\n\tHello! 2 3 4 23"));