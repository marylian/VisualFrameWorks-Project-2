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
	
	function storeData (){
		//localStorage.setItem("test","hello");
		var id 					=Math.floor(Math.random()*100000001);
		//Gather up all our form field values and store in an object.
		//Object properties contain array with the form label and input value.
		var item				= {}; 
			//item.checkbox
			item.sub			= ["Subject:", $('sub').value];
			item.period			= ["Period:", $('period').value];
			item.grade			= ["Grade Level:", $('grade').value];
			item.category		= ["Categories:", $('category').value];
			item.date			= ["Due Date:", $('dueDate').value];
			item.comments		= ["My Notes:", $('comments').value];
		//Save data into Local Storage: Use Stringify to convert our object to a string.
		localStorage.setItem  (id, JSON.stringify (item));
		alert ("Task Saved!");
			
	}
	 
	//Variable defaults
	var taskCategories=["Choose a task", "Grade papers", "Contact parents", "Meetings", "Write lesson plans", "Test", "Projects", "Others"];
	makeCats();
	
	//Set Link and Submit Click Events 
	//var displayTask= $('displayTask');
	//displayTask.addEventListener ("click", getData); 
	//var clearLink= $('clearTask');
	//clearLink.addEventListener ("click",clearLocal);
	var save=$ ('taskSubmit');
	save.addEventListener ("click",storeData);
});


