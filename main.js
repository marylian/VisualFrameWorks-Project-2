   //Marylia Nieves
//Visual Frameworks (VFW) 
//Assignment 2
// 8/09/12 
var chameleon = "blue";
alert (chameleon);

//Wait until the DOM is ready
window.addEventListener ("DOMContentLoaded", function(){
	

	//getElementById Function
	 function $ (x) {
	 	var theElement = document.getElementById (x);
	 	return theElement;
	 }
	//Create select field elements and populate with options.
	
	function makeCats (){
		 var formTag=document.getElementsByTagName ("form"),
		 selectLi=$('categories'),
		 makeSelect=document.createElement ('select');
		 makeSelect.setAttribute("id", "category");
		 for (i=0; i<taskCategories.length; i++){
		 	var makeOption=document.createElement('option');
			var optText=taskCategories[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML=optText;
			makeSelect.appendChild(makeOption);
		 }
		 selectLi.appendChild(makeSelect);
	}
	//Variable defaults
	var taskCategories=["Choose a task", "Grade papers", "Contact parents", "Meetings", "Write lesson plans", "Test", "Projects", "Others"];
	makeCats();
	
	//Set Link and Submit Click Events 
/*	var displayTask= $('displayTask');
	displayTask.addEventListener ("click", getData); 
	var clearLink= $('clearTask');
	clearLink.addEventListener ("click",clearLocal);
	var save=$ ('taskSubmit');
	save.addEventListener ("click",storeData);*/
});


