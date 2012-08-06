//Marylia Nieves
//Visual Frameworks (VFW) 
//Assignment 2
// 8/09/12 

//Wait until the DOM s ready
window.addEventListener ("DOMContentLoaded", function(){
	

	//getElementById Function
	 function $ (x) {
	 	var theElement = document.getElementById (x);
	 	return theElement;
	 }
	
	//Variable defaults
	
	
	//Set Link and Submit Click Events 
	var displayTask= $('displayTask');
	displayTask.addEventListener ("click", getData);
	var clearLink= $('clearTask');
	clearLink.addEventListener ("click",clearLocal);
	var save=$ ('submit');
	save.addEventListener ("click",storeData);
});
