//Grabs Elements
let addBar = document.getElementById("inputBar");
let button = document.getElementById("addButton");
let ul = document.getElementById("ul");

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
	// deleteTemplate();
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

/*function to toggle .done css.
need to find a way to target a specific li */
function toggleDone() {

}

setTimeout(deleteTemplate, 10000);
//Event Listeners
button.addEventListener("click", addElementAfterClick);
addBar.addEventListener("keypress", addElementAfterEnter);