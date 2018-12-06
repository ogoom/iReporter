/* eslint-disable no-unused-vars */


const toggleResponsive = ()=>{
	let myDiv = document.getElementById("myNavbar");
	if (myDiv.className === "navbar") {
		myDiv.className += " responsive";
	} else {
		myDiv.className = "navbar";
	}
	return;
};
const showInputs = ()=> {
	let myDiv = document.getElementById("geoInputs");
	if (myDiv.className === "hidden geotag"){
		myDiv.className = "geotag";
	}else {
		myDiv.className = "hidden geotag";
	}
};

const listRecords = ()=> {
	let listDiv = document.getElementById("listAll");
	if (listDiv.className === "hidden list"){
		listDiv.className = "list";
	}else {
		listDiv.className = "hidden list";
	}
};



