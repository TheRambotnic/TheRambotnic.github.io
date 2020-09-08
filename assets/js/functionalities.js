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
	if (links.style.display === "block")
		links.style.display = "none";
	else
		links.style.display = "block";
}
