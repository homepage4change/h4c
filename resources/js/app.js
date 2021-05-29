const gsap = require('gsap/dist/gsap').gsap;
const ScrollTrigger = require('gsap/dist/ScrollTrigger').ScrollTrigger;
const ScrollToPlugin = require('gsap/dist/ScrollToPlugin').ScrollToPlugin;

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const app = document.getElementById("app");

//Register a new timeline object
const tl = gsap.timeline({
	// Attach it to the scroll
	scrollTrigger: {
		trigger: app,
		pin: true, 
		start: "top top", 
		end: () => `+=${app.offsetHeight * 10}`,
		scrub: 0.3,
		invalidateOnRefresh: true,
  		onRefresh: self => tl.progress(self.progress)
	}
});

const d = 1; //animation duration
const cards = document.querySelectorAll('.card');

/**
 * Timeline animations
 */

//Move the first two cards into the center position
tl.fromTo('.card:nth-child(2)', 				{y:"100%"}, 	{y:0, 	duration: d, ease: 'linear'});
tl.fromTo('.card:nth-child(2) .container', 		{y:"-100%"}, 	{y:0, 	duration: d, ease: 'linear'}, 	"-="+d);
tl.fromTo('.card:nth-child(2) .nav-element', {y:"-100vh"}, 	{y:0, 	duration: d, ease: 'linear'}, 	"-="+d);

tl.fromTo('.card:nth-child(3)', 				{y:"-100%"},	{y:0, 	duration: d, ease: 'linear'}, 	"-="+d);
tl.fromTo('.card:nth-child(3) .container',  	{y:"100%"},		{y:0, 	duration: d, ease: 'linear'},	"-="+d);
tl.fromTo('.card:nth-child(3) .nav-element', {y:"100vh"}, 	{y:0, 	duration: d, ease: 'linear'}, 	"-="+d);

//Hide the hero
tl.to('#hero', {y:"100%", 	duration: 0, ease: 'linear'});

//Animate all the cards
for(let i = 1; i < cards.length-2; i+=2) {
	          //target                                  	//from       //to           //duration      //delay
	tl.fromTo('.card:nth-child('+(i+1)+')', 				{y:0}, 		 {y:"-100%", 	duration: d, ease: 'linear'});
	tl.fromTo('.card:nth-child('+(i+1)+') .container', 		{y:0}, 		 {y:"100%", 	duration: d, ease: 'linear'}, 	"-="+d);
	tl.fromTo('.card:nth-child('+(i+1)+') .nav-element', {y:0}, 		 {y:"100vh", 	duration: d, ease: 'linear'}, 	"-="+d);

	tl.fromTo('.card:nth-child('+(i+3)+')', 				{y:"100%"},  {y:0, 			duration: d, ease: 'linear'},	"-="+d);
	tl.fromTo('.card:nth-child('+(i+3)+') .container', 		{y:"-100%"}, {y:0, 			duration: d, ease: 'linear'}, 	"-="+d);
	tl.fromTo('.card:nth-child('+(i+3)+') .nav-element', {y:"-100vh"},{y:0, 			duration: d, ease: 'linear'}, 	"-="+d);
	
	tl.fromTo('.card:nth-child('+(i+2)+')', 				{y:0},		 {y:"100%", 	duration: d, ease: 'linear'}, 	"-="+d);
	tl.fromTo('.card:nth-child('+(i+2)+') .container',  	{y:0},		 {y:"-100%", 	duration: d, ease: 'linear'},	"-="+d);
	tl.fromTo('.card:nth-child('+(i+2)+') .nav-element', {y:0}, 		 {y:"-100vh", 	duration: d, ease: 'linear'}, 	"-="+d);

	tl.fromTo('.card:nth-child('+(i+4)+')', 				{y:"-100%"}, {y:0, 			duration: d, ease: 'linear'}, 	"-="+d);
	tl.fromTo('.card:nth-child('+(i+4)+') .container',  	{y:"100%"},  {y:0, 			duration: d, ease: 'linear'}, 	"-="+d);
	tl.fromTo('.card:nth-child('+(i+4)+') .nav-element', {y:"100vh"}, {y:0, 			duration: d, ease: 'linear'}, 	"-="+d);
}

//Move the last two cards off stage to reveal the final section
tl.fromTo('.card:nth-child('+(cards.length)+')', 				{y:0}, 	{y:"-100%", 	duration: d, ease: 'linear'});
tl.fromTo('.card:nth-child('+(cards.length)+') .container', 	{y:0}, 	{y:"100%", 		duration: d, ease: 'linear'}, 	"-="+d);
tl.fromTo('.card:nth-child('+(cards.length)+') .nav-element',{y:0},  {y:"100vh", 	duration: d, ease: 'linear'}, 	"-="+d);

tl.fromTo('.card:nth-child('+(cards.length+1)+')', 					{y:0}, {y:"100%", 	duration: d, ease: 'linear'}, 	"-="+d);
tl.fromTo('.card:nth-child('+(cards.length+1)+') .container',  		{y:0}, {y:"-100%", 	duration: d, ease: 'linear'},	"-="+d);
tl.fromTo('.card:nth-child('+(cards.length+1)+') .nav-element',  {y:0}, {y:"-100vh", duration: d, ease: 'linear'}, 	"-="+d);



/**
 * Event handlers
 */

const heading = document.querySelector('#the-end .heading'); 
const submitButton = document.querySelector('#the-end .submit');
const links = document.querySelectorAll('.link-home');
const burgers = document.querySelectorAll(('.hamburger-menu'));
const subMenu = document.querySelector(('.collapse'));
const mainMenu = document.getElementById('menu');
const collapsible = document.querySelector(('.collapsible'));
const menuLinks = document.querySelectorAll(('.close-menu'));


// Submit button hover
submitButton.addEventListener ('mouseover', function() {
	heading.classList.add('pause');
});
submitButton.addEventListener ('mouseout', function() {
	heading.classList.remove('pause');
});


//Scroll to top when H4C logo is clicked
for (const link of links) {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		gsap.to(window, {scrollTo: 0});
	});
}


//Toggle (collapse/expand) Sub-menu
collapsible.addEventListener('click', function(e) {
	e.preventDefault();
	subMenu.classList.toggle("active");
});

//Show Main Menu
for (const burger of burgers) {
	burger.addEventListener('click', function(e) {
		e.preventDefault();
		mainMenu.classList.remove('hidden');
		app.classList.add('blur');
	});
}

//Hide Main Menu
for (const menuLink of menuLinks) {
	menuLink.addEventListener('click', handleMenuLinkClick);
}

function handleMenuLinkClick(e) {
	
	const href = this.getAttribute('href') || "";

	if(href.indexOf("https") == -1) {
		e.preventDefault();
		
		if(this.classList.contains('icon-close-menu')) {
			closeMenu();
		}
		else {
			let sectionID = href.substring(1);
			let cnt = 0;
			let scrollOffset = 0;

			for(const card of cards) {
				if (card.getAttribute('id') == sectionID) {
					scrollOffset = innerHeight + (innerHeight * cnt/2);
					break;
				}
				cnt++;
			}

			gsap.to(window, {
				scrollTo: scrollOffset,
				duration: 0,
				onComplete: function() {
					setTimeout(closeMenu, 200);
				}
			});
		}
	}
	else {
		closeMenu();
	}
}

function closeMenu() {
	mainMenu.classList.add('hidden');
	subMenu.classList.remove("active");
	app.classList.remove('blur');
}



