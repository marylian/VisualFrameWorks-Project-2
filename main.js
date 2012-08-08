   //Marylia Nieves
//Visual Frameworks (VFW) 
//Assignment 2
// 8/09/12 
var chameleon = "blue";
alert (chameleon);

//Wait until the DOM is ready
window.addEventListener ("DOMContentLoaded", function(){
	//alert(localStorage.value(0));	

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
	
	//Find the value of selected checkboxes
	function getSelectedCheckbox () {
		var checkbox =document.forms [0].weekday;
		for (var i=0; i<checkbox.length; i++){
			if (checkbox[i].checked) {
				dayValue = checkbox [i].value;
			}
		}
	}
	
	function storeData (){
		//localStorage.setItem("test","hello");
		var id 					=Math.floor(Math.random()*100000001);
		//Gather up all our form field values and store in an object.
		//Object properties contain array with the form label and input value.
		getSelectedCheckbox ();
		var item				= {}; 
			item.checkbox     	= ["Choose a day", dayValue]
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
	var taskCategories=["Choose a task", "Grade papers", "Contact parents", "Meetings", "Write lesson plans", "Test", "Projects", "Others"],
		dayValue;
	
	makeCats();
	
	//Set Link and Submit Click Events 
	//var displayTask= $('displayTask'); 
	//displayTask.addEventListener ("click", getData); 
	//var clearLink= $('clearTask');
	//clearLink.addEventListener ("click",clearLocal);
	var save=$ ('taskSubmit');
	save.addEventListener ("click",storeData);
});


