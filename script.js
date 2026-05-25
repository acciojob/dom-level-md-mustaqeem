//your JS code here. If required.

//your JS code here. If required.

const element = document.getElementById("level");

let level = 0;

let current = element;

// Count parent levels
while (current) {

	level++;

	current = current.parentElement;
}

// Display result
alert("The level of the element is: " + level);