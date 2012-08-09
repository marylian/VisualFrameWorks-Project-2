//Marylia Nieves
//Visual Frameworks (VFW) 
//Assignment 2
// 8/09/12 
//var chameleon = "blue";
//alert (chameleon);

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

	function toggleControls (m) {
		switch (m) {
			case "on":
				$('taskForm').style.display="none";
				$('clearTask').style.display="inline";
				$ ('displayTask').style.display="none;"
				$ ('addTask').style.display="inline";
				break;
			case "off":
				$('taskForm').style.display="block";
				$('clearTask').style.display="inline";
				$('displayTask').style.display="inline";
				$('addTask').style.display="none";
				$('cats').style.display="none";
				break;
			default:
				return false;
			
			
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


function getData (){
	toggleControls ("on");
	if(localStorage===0){
		alert("There is no task to display");
	}
		//write data from local storage to the browser.
		var makeDiv = document.createElement ('div');
		makeDiv.setAttribute ("id", "cats");
		var makeList = document.createElement ('ul');
		makeDiv.appendChild (makeList);
		document.body.appendChild(makeDiv);
        $('cats').style.display="block";
		for (var i=0, len=localStorage.length; i<len; i++) { 
			var makeli = document.createElement ('li');
			makeList.appendChild (makeli);
			var key = localStorage.key (i);
			var value = localStorage.getItem (key);
			//convert string from local storage  value back to an object by using JSON.parse
			var obj = JSON.parse (value);
			var makeSubList = document.createElement ('ul');
			makeli.appendChild (makeSubList);
			for (var m in obj){
				var makeSubli = document.createElement ('li');
				makeSubList.appendChild (makeSubli);
				var optSubText = obj [m] [0]+ " " +obj [m] [1];
				makeSubli.innerHTML =optSubText;
			}
		}
	}


	function clearLocal() {
		if (localStorage.length===0){
			alert("There is no task to clear.");
		}
		else{
			localStorage.clear ();
			alert("All contacts are deleted!");
			window.location.reload();
			return false;
		}
		 
		
	}
	
	//Variable defaults
	var taskCategories=["Choose a task", "Grade papers", "Contact parents", "Meetings", "Write lesson plans", "Test", "Projects", "Others"],
		dayValue;

	makeCats();
	
	//Set Link and Submit Click Events 
	var displayTask= $('displayTask'); 
	displayTask.addEventListener ("click", getData); 
	var clearLink= $('clearTask');
	clearLink.addEventListener ("click", clearLocal);
	var save= $('taskSubmit');
	save.addEventListener ("click",storeData);
});

