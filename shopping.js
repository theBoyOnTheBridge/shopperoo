//Globals
let addBar = document.getElementById("inputBar");
let button = document.getElementById("addButton");
let ul = document.querySelector("ul");

//Event Functions
/* currently throwing a console error whenever addElement() is run
 more than once */
function deleteTemplate() {
	/* need to find a better way to get both elements without needing
	a class and an id */
	let template1 = document.getElementById("template1");
	let template2 = document.getElementById("template2");
	template1.remove();
	template2.remove();
};

// adds a list item onto the end of the list
function addElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(addBar.value));
	ul.appendChild(li);
	addBar.value = "";
	// deleteTemplate(); currently on hold pending console error fix
};

// adds a list item after the click event on the Add! button
function addElementAfterClick() {
	if (addBar.value !== "") {
		addElement();
	}
};

// adds a list item after the keypress (enter) event
function addElementAfterEnter(event) {
	if (addBar.value !== "" && event.which === 13) {
		addElement();
	};
}

//function to toggle .done css.
function toggleDone(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

setTimeout(deleteTemplate, 10000); // temp solution pending permanent fix
//Event Listeners
button.addEventListener("click", addElementAfterClick);
addBar.addEventListener("keypress", addElementAfterEnter);
ul.addEventListener("click", toggleDone);