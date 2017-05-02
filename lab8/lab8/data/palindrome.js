let td={
	isPalindrome(text){
		text = text.toLowerCase();
	    text = text.replace(/[.,\/#!$%\^&’\*;:{}=\?-_`~()]/g,"");
	    text=text.replace(/\s+/g,'');
	    let j=text.length-1;
	    //alert(text);
	    for(let i=0;i<text.length;i++){
	    	if(text[i]!=text[j])
	    		return false;
	    	j--;
	    }
	    return true;
	}
}
module.exports=td;