(function() {

    let palindromeFunction = {
        isPalindrome: function(text) {
	        text = text.toLowerCase();
		    text = text.replace(/[.,\/#!$%\^&’\*;:{}=\?-_`~()]/g,"");
		    text=text.replace(/\s+/g,'');
		    let j=text.length-1;
		    for(let i=0;i<text.length;i++){
		    	if(text[i]!=text[j])
		    		return false;
		    	j--;
		    }
		    return true;
        }
    };
	var formstatic=document.getElementById('form_static');
	var	palindrome_list=document.getElementById('palindromechecker');
	//alert("ssaw");
	formstatic.addEventListener('submit', function(event) {
		event.preventDefault();
		//alert("lol")
		var isPalindrome=palindromeFunction['isPalindrome'];
		var text = document.getElementById("palindrome").value;
		var li = document.createElement("li");
       	var result = isPalindrome(text);

        if(result) {
            li.classList.add('is-palindrome');
        }
        else {
            li.classList.add('not-palindrome')
        }
        li.appendChild(document.createTextNode(text));
        palindrome_list.appendChild(li);
	});
})();