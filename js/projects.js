$("a.amazon-search-btn").on("click",function() {
    let search = document.getElementById('amazon_search').value;

    if(search.length > 0) {
	    let searchedItemsArray = search.split(",");
	    for(let i = 0; i < searchedItemsArray.length; i++) {
	        window.open('https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords='+searchedItemsArray[i], '_blank');
	    }
	} else {
		window.alert("Search field is blank, please enter one or more items.")
	}
});
