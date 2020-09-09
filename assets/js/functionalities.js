/*=======================================
	ONLOAD FUNCTIONS

	Displays necessary data when the
	page is loaded
=======================================*/
window.onload = function() {
	// displays current year in footer
	// and dynamic age in 'about_me.html'
	var year = new Date().getFullYear();
	document.querySelector("#currentYear").innerHTML = year;
	document.querySelector("#age").innerHTML = year - 1999;
}


/*=======================================
	MOBILE NAVIGATION BAR

	Displays navbar on mobile devices
=======================================*/
function openNav() {
	var links = document.querySelector("#mobileNavLinks");
	var hamburger = document.querySelector("#mobileNav");

	if (links.style.display === "block" && hamburger.classList.contains("fa-times")) {
		links.style.display = "none";
		hamburger.classList.remove("fa-times");
		hamburger.classList.add("fa-bars");
	}
	else {
		links.style.display = "block";
		hamburger.classList.remove("fa-bars");
		hamburger.classList.add("fa-times");
	}
}
