

const toggleResponsive = ()=>{
	let myDiv = document.getElementById("myNavbar");
	if (myDiv.className === "navbar") {
		myDiv.className += " responsive";
	} else {
		myDiv.className = "navbar";
	}
	return;
};



