/*=======================================
	ONLOAD FUNCTIONS

	Displays necessary data when the
	page is loaded
=======================================*/
window.onload = function() {
	// displays current year in footer
	// and dynamic age in 'about_me.html'
	let date = new Date();
	document.querySelector("#currentYear").innerHTML = date.getFullYear();
	document.querySelector("#age").innerHTML = date.getFullYear() - 1999;
}


/*=======================================
	MOBILE NAVIGATION BAR

	Displays navbar on mobile devices
=======================================*/
function openNav() {
	let links = document.querySelector("#mobileNavLinks");
	let hamburger = document.querySelector("#mobileNav");

	if (links.style.display === "block" && hamburger.classList.contains("fa-times")) {
		links.style.display = "none";
		hamburger.classList.remove("fa-times");
		hamburger.classList.add("fa-bars");
	} else {
		links.style.display = "block";
		hamburger.classList.remove("fa-bars");
		hamburger.classList.add("fa-times");
	}
}

function langOpen() {
	let langBtn = document.querySelector(".langBtn");
	let arrow = document.querySelector("#arrow");

	if (langBtn.style.display === "block" && arrow.classList.contains("fa-angle-up")) {
		langBtn.style.display = "none";
		arrow.classList.remove("fa-angle-up");
		arrow.classList.add("fa-angle-down");
	} else {
		langBtn.style.display = "block";
		arrow.classList.remove("fa-angle-down");
		arrow.classList.add("fa-angle-up");
	}
}
