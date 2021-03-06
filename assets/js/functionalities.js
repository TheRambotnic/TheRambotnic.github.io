/*=======================================
	ONLOAD FUNCTIONS

	Displays necessary data when the
	page is loaded
=======================================*/
window.onload = function() {
	// displays current year in footer
	// and dynamic age in 'about_me.html'
	var year = new Date().getFullYear();
	document.getElementById("currentYear").innerHTML = year;
	document.getElementById("age").innerHTML = year - 1999;
}


/*=======================================
	MOBILE NAVIGATION BAR

	Displays navbar on mobile devices
=======================================*/
function openNav() {
	var links = document.getElementById("mobileNavLinks");
	var hamburger = document.getElementById("mobileNav");

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

function langOpen() {
	var langBtn = document.getElementsByClassName("langBtn")[0];
	var arrow = document.getElementById("arrow");

	if (langBtn.style.display === "block" && arrow.classList.contains("fa-angle-up")) {
		langBtn.style.display = "none";
		arrow.classList.remove("fa-angle-up");
		arrow.classList.add("fa-angle-down");
	}
	else {
		langBtn.style.display = "block";
		arrow.classList.remove("fa-angle-down");
		arrow.classList.add("fa-angle-up");
	}
}
