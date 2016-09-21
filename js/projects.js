$("a.link").on("click",function(){
    var search = document.getElementById('amazon_search').value;
    if(search.length > 0){
	    var str = search.split(",");
	    var str_len = str.length;
	    for(var i = 0; i < str_len; i++){
	        window.open('https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords='+str[i], '_blank');
	    }
	}
});